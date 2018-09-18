# == Schema Information
#
# Table name: friends
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness: { scope: :friend_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: 'User'

end
