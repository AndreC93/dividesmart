# == Schema Information
#
# Table name: payments
#
#  id              :bigint(8)        not null, primary key
#  bill_id         :integer          not null
#  user_id         :integer          not null
#  type            :string           default("debt"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  amount_cents    :integer          default(0), not null
#  amount_currency :string           default("USD"), not null
#

class Payment < ApplicationRecord
  validates :bill_id, :user_id, :amount_cents, :amount_currency, :type, presence: true
  validates :type, inclusion: { in: %w(debt credit) }

  belongs_to :user, foreign_key: :user_id, class_name: 'User'
  belongs_to :bill, foreign_key: :bill_id, class_name: 'Bill'

end
