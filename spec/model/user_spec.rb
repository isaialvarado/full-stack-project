require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe User do
    it { should have_many(:deals) }
    it { should have_many(:comments) }
    it { should have_many(:thumbs) }
  end
end
