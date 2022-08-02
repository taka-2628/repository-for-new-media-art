class User < ApplicationRecord
  has_secure_password
  has_many :projects
  has_many :comments

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 6..20 }
  validates :intro, length: { maximum: 100 }
end
