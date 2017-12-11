class Potential < ApplicationRecord
  validates :user_id, presence: true, uniqueness: { scope: :potential_id }
  validates :do_you_like_them, :do_they_like_you, presence: true
end
