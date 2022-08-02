class Project < ApplicationRecord
  belongs_to :user
  
  has_many :comments
  has_many :project_genres
  has_many :project_technologies

  has_many :genres, through: :project_genres
  has_many :technologies, through: :project_technologies
end
