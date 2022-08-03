class CreateProjectGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :project_genres do |t|
      t.integer :project_id
      t.integer :genre_id
    end
  end
end
