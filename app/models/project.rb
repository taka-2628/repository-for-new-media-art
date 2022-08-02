class Project < ApplicationRecord
  belongs_to :user
  
  has_many :comments
  has_many :project_genres
  has_many :project_technologies

  has_many :genres, through: :project_genres
  has_many :technologies, through: :project_technologies

  validates :user_id, presence: true
  validates :title, presence: true
  validates :subtitle, presence: true
  validates :description, length: { in: 200..500 }
  validates :image, presence: true
end
