class CreateMatches < ActiveRecord::Migration[5.1]
  def change
    create_table :matches do |t|
      t.integer :user_id, null: false
      t.integer :match_id, null: false

      t.timestamps
    end
    add_index :matches, %i(user_id match_id), unique: true
  end
end
