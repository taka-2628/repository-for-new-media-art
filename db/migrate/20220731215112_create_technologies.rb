class CreateTechnologies < ActiveRecord::Migration[7.0]
  def change
    create_table :technologies do |t|
      t.string :technology
      t.string :category

      t.timestamps
    end
  end
end
