class Bill < ApplicationRecord
  validates , presence: true
  validates , uniqueness: { scope: : }

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: 'User'

end
