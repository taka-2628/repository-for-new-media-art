class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_image, :intro, :website, :github

  has_many :projects
  has_many :comments
end
