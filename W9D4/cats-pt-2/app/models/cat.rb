require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  # .freeze renders a constant immutable.
  CAT_COLORS = %w(red blue fuscia limegreen huntergreen calico umber).freeze

  validates :color, inclusion: CAT_COLORS
  validates :sex, inclusion: %w(M F)
  validates :birth_date, :color, :name, :sex, presence: true

  # Remember, has_many is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.
  has_many :rental_requests,
    class_name: :CatRentalRequest,
    dependent: :destroy

  def age
    time_ago_in_words(birth_date)
  end
end

# rails g model User username:string password_digest:string


# Pro-tip: You can generate a model and pre-populated migration from the command line by passing rails g model an options hash
# Example: rails g model User username:string password_digest:string session_token:string
# Add the appropriate constraints and indices to the migration and run rails db:migrate
# Check schema.rb to make sure it worked
