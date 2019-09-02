require 'spec_helper'
require 'rails_helper'


feature 'the signup process' do
    scenario 'has a new user page' do
		visit new_user_url
		expect(page).to have_content "Welcome new user!"
    end

    feature 'signing up a user' do
		
		scenario 'shows username on the homepage after signup' do
			visit new_user_url
			fill_in "email", :with => "abc@gmail.com"
			fill_in "password", :with => "hunter2"
			click_on "Create user"
			expect(page).to have_content("abc@gmail.com")
		end

    end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login'

end

feature 'logging out' do
  scenario 'begins with a logged out state'

  scenario 'doesn\'t show username on the homepage after logout'

end