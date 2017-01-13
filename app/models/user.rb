class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true

  after_initialize :ensure_session_token
  has_many :deals, foreign_key: :author_id

  def self.find_by_credentials(username, password)
    user = User.where(
      "username = :username OR email = :email",
      username: username, email: username
    ).first

    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(128)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    ensure_session_token_uniqueness
    self.save!
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by_session_token(self.session_token)
      self.session_token = User.generate_session_token
    end
  end
end
