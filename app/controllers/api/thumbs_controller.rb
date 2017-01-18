class Api::ThumbsController < ApplicationController
  def create
    @thumb = Thumb.new(thumb_params)
    @thumb.user_id = current_user.id

    if @thumb.save
      render :show
    else
      render json: @thumb.errors.full_messages, status: 422
    end
  end

  def update
    @thumb = current_user.thumbs.find(params[:id])

    if @thumb.update_attributes(thumb_params)
      render :show
    else
      render json: @thumb.errors.full_messages, status: 422
    end
  end

  def destroy
    @thumb = current_user.thumbs.find(params[:id])
    @thumb.destroy
    render :show
  end

  private

  def thumb_params
    params.require(:thumb).permit(:value, :deal_id)
  end
end
