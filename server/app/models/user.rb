class User < ApplicationRecord
    has_secure_password
    has_many :posts
    validates :username, presence: true, uniqueness: true, length: { minimum: 4 }
    validates :email, presence: true, uniqueness: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
    end