require 'rails_helper'

RSpec.describe User, type: :model do

    let(:user) { create(:user) }
    describe "validations -" do
      before(:each) do 
        create(:user)
      end

      it { should validate_presence_of(:email) }
      it { should validate_length_of(:password).is_at_least(6) }
      it { should validate_presence_of(:password_digest) }
      it { should validate_uniqueness_of(:email) }

    end
    #describe check methods for each user

    describe "#is_password?(password)" do
        let(:user) { create(:user) }
        context "has a valid password" do
            it "returns true" do 
                expect(user.is_password?('hunter2')).to be(true)
            end
        end
        context "has an invalid password" do
            it "returns true" do 
                expect(user.is_password?('nunnnnnnn')).to be(false)
            end
        end
    end

    describe "::find_by_credentials(email, password)" do
        let(:user) { create(:user) }
        it "finds a valid user" do

            user2 = User.find_by_credentials(user.email.to_s, 'hunter2')
            expect(user2.email).to eq(user.email)
        end

        it "returns nil for an invalid user" do
			user2 = User.find_by_credentials(user.email.to_s, 'hunter3')
			expect(user2).to be(nil)
        end
	end

	describe "::generate_user_token" do 
		let(:user) { create(:user) }
		it "generates a user token" do
			session_token = User.generate_session_token
			expect(session_token).to be_a(String)
		end
	end

	describe "#reset_session_token!" do
		let(:user) { create(:user) }
        it "generates and sets a new session token" do
            temp_token = user.session_token
            user.reset_session_token!
			expect(user.session_token).not_to eq(temp_token)
		end
        
        it "outputs the new session token" do
            u2 = user.reset_session_token!
            expect(u2).to eq(user.session_token)
        end
    end
    
    describe "#ensure_session_token" do
        let(:user) { create(:user) }
        it "keeps session token if valid" do
            st = user.session_token
            user.ensure_session_token
            expect(user.session_token).to eq(st)
        end

    end
	

end