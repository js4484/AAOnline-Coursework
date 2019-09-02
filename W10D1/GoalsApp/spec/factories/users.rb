FactoryBot.define do
  factory :user do
    email { Faker::Internet.email}
    password { 'hunter2' }
    session_token { Faker::Crypto.md5 }


  end

end