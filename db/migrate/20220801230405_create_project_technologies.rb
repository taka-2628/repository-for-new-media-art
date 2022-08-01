class CreateProjectTechnologies < ActiveRecord::Migration[7.0]
  def change
    create_table :project_technologies do |t|
      t.string :project_id
      t.string :technology_id

      t.timestamps
    end
  end
end
