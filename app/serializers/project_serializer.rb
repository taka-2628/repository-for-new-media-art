class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :subtitle, :description, :image, :url, :github_url

  belongs_to :user
  has_many :comments
  has_many :genres
  has_many :technologies
end
