class Thumb < ActiveRecord::Base
  validates :user, :deal, presence: true
  validates :value, inclusion: { in: [-1, 1] }
  belongs_to :user
  belongs_to :deal
end
