class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :profile_image
      t.text :intro
      t.string :website
      t.string :github
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
