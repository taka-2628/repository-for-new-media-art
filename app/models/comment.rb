class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :project

  validates :user_id, presence: true
  validates :project_id, presence: true
  validates :body, presence: true, length: { maximum: 250 }
end
