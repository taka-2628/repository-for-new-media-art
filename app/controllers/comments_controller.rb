class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def create
    comment = Comment.create(comment_params)
    render json: comment, status: :created
  end

  def update
    comment = find_comment
    comment.update(comment_params)
    render json: comment, status: :accepted
  end

  def destroy
    comment = find_comment
    comment.destroy
    head :no_content, status: :deleted
  end
  
  private

  def find_comment
    Comment.find(params[:id])
  end

  def comment_params
    params.permit(:user_id, :project_id, :body)
  end

  def render_not_found_response
    render json: { error: "Comment not found" }, status: :not_found
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
