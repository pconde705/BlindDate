class Potential < ApplicationRecord
  validates :user_id, presence: true, uniqueness: { scope: :potential_id }
  validates :do_you_like_them, :do_they_like_you, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :potential,
    foreign_key: :potential_id,
    class_name: :User
end
