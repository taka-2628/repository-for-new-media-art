class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at

  belongs_to :user, serializer: CommentUserSerializer
  belongs_to :project
end
