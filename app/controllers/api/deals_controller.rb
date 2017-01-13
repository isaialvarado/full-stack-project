class Api::DealsController < ApplicationController
  def index
    @deals = Deal.all
  end

  def show
    @deal = Deal.find(params[:id])
  end

  def create
    @deal = Deal.new(deal_params)

    if @deal.save
      render :show
    else
      render json: @deal.errors.full_messages, status: 422
    end
  end

  def update
    @deal = current_user.deals.find(params[:id])

    if @deal.update_attributes(deal_params)
      render :show
    else
      render json: @deal.errors.full_messages, status: 422
    end
  end

  def destroy
    @deal = Deal.find(params[:id])
    @deal.destroy
    render :show
  end

  private

  def deal_params
    params.require(:deal).permit(
      :category, :title, :price, :vendor, :description, :deal_url,
      :image_url, :author_id
    )
  end
end
