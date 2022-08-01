class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.string :title
      t.string :subtitle
      t.string :description
      t.string :image
      t.string :url
      t.string :github_url
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
