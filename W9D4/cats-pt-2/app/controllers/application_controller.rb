class ApplicationController < ActionController::Base

    helper_method :current_user

    def  current_user
        
    end

    def valid_something?
        !!current_user
    end
    
    
end
