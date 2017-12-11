class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :img_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :date_of_birth, null: false
      t.string :gender, null: false
      t.string :sexual_orientation, null: false
      t.string :age_preference, null: false
      t.text :introduction
      t.text :dream_job
      t.text :cooking_preference
      t.text :book_preference
      t.text :movie_preference
      t.text :pet_preference
      t.text :outdoor_activity_preference
      t.text :indoor_activity_preference
      t.text :inside_joke
      t.text :intelligence_level
      t.text :what_do_you_do
      t.text :post_first_date

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
