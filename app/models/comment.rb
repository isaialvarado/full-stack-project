class Comment < ActiveRecord::Base
  validates :body, :author, :deal, presence: true
  validates :body, length: { maximum: 300 }

  belongs_to :deal
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
