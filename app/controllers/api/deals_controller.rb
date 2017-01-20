class Api::DealsController < ApplicationController
  def search
    if params[:searchData][:filter].nil?
      if params[:searchData][:keywords].empty?
        @deals = Deal.all.order('created_at DESC').limit(25)
      else
        @deals =
          Deal
          .where('title ~* ?', "\\m#{params[:searchData][:keywords]}\\M")
          .order('created_at DESC')
          .limit(25)
      end
    elsif params[:searchData][:keywords].empty?
        if (params[:searchData][:filter][:maxPrice] == '') || (params[:searchData][:filter][:maxPrice].nil?)
          max_price = Float::INFINITY
        else
          max_price = params[:searchData][:filter][:maxPrice].to_f
        end

      @deals =
        Deal
          .where('price >= ?', params[:searchData][:filter][:minPrice].to_f)
          .where('price <= ?', [Float::INFINITY, max_price].min)
          .order('created_at DESC')
          .limit(25)

          @category = params[:searchData][:filter][:category]
          @minRating = params[:searchData][:filter][:minRating].to_i
    else
      if (params[:searchData][:filter][:maxPrice] == '') || (params[:searchData][:filter][:maxPrice].nil?)
        max_price = Float::INFINITY
      else
        max_price = params[:searchData][:filter][:maxPrice].to_f
      end
      
      @deals =
        Deal
          .where('title ~* ?', "\\m#{params[:searchData][:keywords]}\\M")
          .where('price >= ?', params[:searchData][:filter][:minPrice].to_f)
          .where('price <= ?', [Float::INFINITY, max_price].min)
          .order('created_at DESC')
          .limit(25)

          @category = params[:searchData][:filter][:category]
          @minRating = params[:searchData][:filter][:minRating].to_i
    end

    deal_ids = @deals.pluck(:id)

    @thumb_sums =
      Thumb
        .select(:deal_id)
        .where(deal_id: deal_ids)
        .group(:deal_id)
        .sum(:value)

    @comment_counts =
      Comment
        .select(:deal_id)
        .where(deal_id: deal_ids)
        .group(:deal_id)
        .count

    if logged_in?
      @thumb_values =
        current_user.thumbs
          .select(:deal_id)
          .where(deal_id: deal_ids)
          .group(:deal_id)
          .sum(:value)

      @thumb_ids =
        current_user.thumbs
          .select(:deal_id)
          .where(deal_id: deal_ids)
          .group(:deal_id)
          .sum(:id)
    else
      @thumb_values = {}
      @thumb_ids = {}
    end

    render :index
  end

  def index
    @popular_deals =
      Deal
        .select('deals.id')
        .joins(:thumbs)
        .group('deals.id')
        .having('sum(thumbs.value) > 8')
        .order('deals.created_at DESC')
        .limit(20)

    deal_ids = @popular_deals.pluck(:id)

    @deals = Deal.where(id: deal_ids)

    @thumb_sums =
      Thumb
        .select(:deal_id)
        .where(deal_id: deal_ids)
        .group(:deal_id)
        .sum(:value)

    @comment_counts =
      Comment
        .select(:deal_id)
        .where(deal_id: deal_ids)
        .group(:deal_id)
        .count

    if logged_in?
      @thumb_values =
        current_user.thumbs
          .select(:deal_id)
          .where(deal_id: deal_ids)
          .group(:deal_id)
          .sum(:value)

      @thumb_ids =
        current_user.thumbs
          .select(:deal_id)
          .where(deal_id: deal_ids)
          .group(:deal_id)
          .sum(:id)
    else
      @thumb_values = {}
      @thumb_ids = {}
    end
  end

  def show
    @deal = Deal.find(params[:id])

    if logged_in?
      @thumb = current_user.thumbs.where(deal_id: @deal.id).as_json.first
    else
      @thumb = {}
    end

    @comments = Comment.includes(:author).where(deal_id: @deal.id)
    @total_comments = @comments.count
  end

  def create
    @deal = Deal.new(deal_params)

    if @deal.valid?
      begin
        unless deal_params[:image_url].empty?
          response = Cloudinary::Uploader.upload(@deal.image_url)
          @deal.cloud_url = response['secure_url']
          @deal.cloud_public_id = response['public_id']
        end
      rescue
        render json: ["Invalid Image URL"], status: 422
      end
      @deal.save

      render :show
    else
      render json: @deal.errors.full_messages, status: 422
    end
  end

  def update
    @deal = current_user.deals.find(params[:id])

    if @deal
      old_image_url = @deal.image_url
      @deal.assign_attributes(deal_params)
      if @deal.valid?
        begin
          if @deal.cloud_public_id && deal_params[:image_url].empty?
            Cloudinary::Uploader.destroy(@deal.cloud_public_id, invalidate: true)

            @deal.cloud_url = nil
            @deal.cloud_public_id = nil
          elsif (old_image_url != deal_params[:image_url]) && !deal_params[:image_url].empty?
            response = Cloudinary::Uploader.upload(@deal.image_url)
            if @deal.cloud_public_id
              Cloudinary::Uploader.destroy(@deal.cloud_public_id, invalidate: true)
            end

            @deal.cloud_url = response['secure_url']
            @deal.cloud_public_id = response['public_id']
          end

          @deal.save
          render :show
        rescue
          render json: ["Invalid Image URL"], status: 422
        end
      else
        render json: @deal.errors.full_messages, status: 422
      end
    else
      render json: {}, status: 422
    end
  end

  def destroy
    @deal = current_user.deals.find(params[:id])

    if @deal
      if @deal.cloud_public_id
        Cloudinary::Uploader.destroy(@deal.cloud_public_id, invalidate: true)
      end
      @deal.destroy
      render :show
    else
      render json: {}, status: 422
    end
  end

  private

  def deal_params
    params.require(:deal).permit(
      :category, :title, :price, :vendor, :description, :deal_url,
      :image_url, :author_id
    )
  end
end
