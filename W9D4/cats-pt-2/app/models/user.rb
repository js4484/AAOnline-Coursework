class User < ApplicationRecord
    validates :username, presence: true
    validates :password_digest, presence: true
    validates :session_token, presence: true 

    attr_reader :password

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)

        self.session_token
    end

    def self.generate_session_token 
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password) 

    end

    def is_password?(password)
        bcp = BCrypt::Password.new(self.password_digest)
        bcp.is_password?(password)

    end

    def self.find_by_credentials(username, password)
       
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    
    end

end
