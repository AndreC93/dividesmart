# == Schema Information
#
# Table name: bills
#
#  id               :bigint(8)        not null, primary key
#  creator_id       :integer          not null
#  category         :string           default("General"), not null
#  description      :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  balance_cents    :integer          default(0), not null
#  balance_currency :string           default("USD"), not null
#

class Bill < ApplicationRecord
  validates :creator_id, :category, :balance_cents, :balance_currency, :description, presence: true
  validates :category, inclusion: { in: ['General', 'Entertainment', 'Food and drink', 'Home', 'Life', 'Transportation', 'Uncategorized', 'Utilities'] }

  belongs_to :creator, foreign_key: :creator_id, class_name: 'User'
  has_many :payments, dependent: :destroy
  has_many :participants, through: :payments, source: :user


end
