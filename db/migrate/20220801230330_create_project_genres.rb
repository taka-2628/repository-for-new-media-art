class CreateProjectGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :project_genres do |t|
      t.string :project_id
      t.string :genre_id
    end
  end
end
