FactoryBot.define do
  factory :location do
    name { Faker::Pokemon.location }
  end
end