class User < ApplicationRecord
  has_many :projects
  has_many :comments
end