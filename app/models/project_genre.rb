class ProjectGenre < ApplicationRecord
  belongs_to :project
  belongs_to :genre
end
