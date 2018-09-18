# == Schema Information
#
# Table name: bills
#
#  id          :bigint(8)        not null, primary key
#  creator_id  :integer          not null
#  category    :string           default("General"), not null
#  amount      :decimal(13, 2)   not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord
  validates :creator_id, :category, :amount, :description, presence: true
  validates :category, inclusion: { in: ['General', 'Entertainment', 'Food and drink', 'Home', 'Life', 'Transportation', 'Uncategorized', 'Utilities'] }
  # validates , uniqueness: { scope: : }

  belongs_to :user, foreign_key: :creator_id, class_name: 'User'
  has_many :payments
  has_many :participants, through: :payments, source: :user

end
