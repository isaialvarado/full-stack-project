class Api::ThumbsController < ApplicationController
  def create
    @thumb = Thumb.new(thumb_params)

    if @thumb.save
      render json: @thumb
    else
      render json: @thumb.errors.full_messages, status: 422
    end
  end

  def update
    @thumb = current_user.thumbs.where(
      'user_id = :user AND deal_id = :deal_id',
      { user_id: thumb_params[:user_id], deal_id: thumb_params[:deal_id] }
    )
  end

  private

  def thumb_params
    params.require(:thumb).permit(:value, :user_id, :deal_id)
  end
end
