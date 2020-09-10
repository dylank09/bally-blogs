class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable




  validates :first_name, :last_name, presence: true
  has_many :post

  def full_name
    "#{first_name} #{last_name}"
  end

end
