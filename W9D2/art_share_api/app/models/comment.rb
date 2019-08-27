class Comment < ApplicationRecord
    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
    belongs_to :artwork,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: 'Artwork',
        dependent: :destroy

    has_many :likes, as: :likeable

    has_many :user_likes,
        through: :likes,
        source: :user

    def self.comment_to_view(user_id)
        Comment.where(user_id: user_id)
    end

    def self.artwork_comment(artwork_id)
        Comment.where(artwork_id: artwork_id)
    end
end