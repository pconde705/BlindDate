# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171211200642) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "matches", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "match_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "match_id"], name: "index_matches_on_user_id_and_match_id", unique: true
  end

  create_table "potentials", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "potential_id", null: false
    t.boolean "do_you_like_them", null: false
    t.boolean "do_they_like_you", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "potential_id"], name: "index_potentials_on_user_id_and_potential_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "img_url", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.date "date_of_birth", null: false
    t.string "gender", null: false
    t.string "sexual_orientation", null: false
    t.string "age_preference", null: false
    t.text "introduction"
    t.text "dream_job"
    t.text "cooking_preference"
    t.text "book_preference"
    t.text "movie_preference"
    t.text "pet_preference"
    t.text "outdoor_activity_preference"
    t.text "indoor_activity_preference"
    t.text "inside_joke"
    t.text "intelligence_level"
    t.text "what_do_you_do"
    t.text "post_first_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
