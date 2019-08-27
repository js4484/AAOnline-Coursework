class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true

    has_many :artworks,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'Artwork'

    has_many :viewer_shares,
        primary_key: :id,
        foreign_key: :viewer_id,
        class_name: 'ArtworkShare'  

    has_many :shared_artworks,
        through: :viewer_shares,
        source: :artwork
       
    has_many :comments,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'Comment'

    has_many :likes, as: :likeable

    has_many :liked_comments,
        through: :likes,
        source: :likeable, source_type: 'Comment'
        
    has_many :liked_artworks,
        through: :likes,
        source: :likeable, source_type: 'Artwork'
end


