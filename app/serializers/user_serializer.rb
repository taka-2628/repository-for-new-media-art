class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_image, :intro, :website, :github

  has_many :projects
end
