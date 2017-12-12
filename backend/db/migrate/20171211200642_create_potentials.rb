class CreatePotentials < ActiveRecord::Migration[5.1]
  def change
    create_table :potentials do |t|
      t.integer :user_id, null: false
      t.integer :potential_id, null: false
      t.boolean :do_you_like_them, null: false
      t.boolean :do_they_like_you, null: false

      t.timestamps
    end
    add_index :potentials, %i(user_id potential_id), unique: true
  end
end
