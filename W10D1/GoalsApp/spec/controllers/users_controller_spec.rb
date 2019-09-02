require 'rails_helper'


RSpec.describe UsersController, type: :controller do
	describe "GET #index" do
		it "renders an index for users" do
			get :index
			expect(subject).to render_template(:index)
        end
	end

	describe "GET #new" do
		it "renders a new user template" do
			get :new
			expect(subject).to render_template(:new)
		end
	end

    describe "POST #create" do
        let(:user) { create(:user) }
        context "with valid params" do 
			it "redirects to the index of users" do
				post :create, params: { user: { email: 'abc@gmail.com', password: 'hunter2' }}
                expect(response).to redirect_to(users_url)
                
            end
        end
		context "with invalid params" do
			it "renders the new page" do
				post :create, params: { user: { email: 'abc@gmail.com' }}
				expect(response).to render_template(:new) 
				expect(response.status).to eq(422)
			end
        end

	end

    describe "DELETE #destroy" do
        let(:user) { create(:user) }
        it "will remove user from database" do
            # post :delete, params: { id: user.id }
            delete :destroy, params: {id: user.id}


        end
        it "redirects to index of users" do
            expect(response).to redirect_to(users_url)
        end
		
	end

end
