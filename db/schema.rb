# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_01_230405) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "project_id"
    t.string "body"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "genres", force: :cascade do |t|
    t.string "genre"
  end

  create_table "project_genres", force: :cascade do |t|
    t.integer "project_id"
    t.integer "genre_id"
  end

  create_table "project_technologies", force: :cascade do |t|
    t.integer "project_id"
    t.integer "technology_id"
  end

  create_table "projects", force: :cascade do |t|
    t.integer "user_id"
    t.string "title"
    t.string "subtitle"
    t.string "description"
    t.string "image"
    t.string "url"
    t.string "github_url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "technologies", force: :cascade do |t|
    t.string "technology"
    t.string "category"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "profile_image"
    t.text "intro"
    t.string "website"
    t.string "github"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
