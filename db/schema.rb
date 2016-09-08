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

ActiveRecord::Schema.define(version: 20160903213111) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authorizations", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.text     "info"
    t.text     "credentials"
    t.text     "extra"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.index ["user_id"], name: "index_authorizations_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.date     "date"
    t.string   "theme"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "description"
    t.integer  "venue_id"
    t.integer  "location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string   "city"
    t.string   "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "state"
  end

  create_table "papers", force: :cascade do |t|
    t.string   "topic"
    t.string   "name"
    t.string   "email"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sponsors", force: :cascade do |t|
    t.string   "name"
    t.string   "website"
    t.string   "twitter"
    t.string   "image"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "active",     default: false, null: false
  end

  create_table "talks", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "event_id"
    t.integer  "speaker_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "status"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "twitter"
    t.string   "photo_url"
    t.string   "url"
    t.string   "facebook"
    t.string   "title"
    t.string   "organization_name"
    t.string   "organization_url"
    t.integer  "talks_count",       default: 0
  end

  create_table "venues", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.integer  "location_id"
    t.string   "address"
    t.boolean  "override_map_with_coordinates", default: false
  end

end
