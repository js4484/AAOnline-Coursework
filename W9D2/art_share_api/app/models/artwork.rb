class Artwork < ApplicationRecord
    validates :title, presence: true, uniqueness: {scope: :artist_id}
    validates :image_url, presence: true
    validates_uniqueness_of :image_url, message: 'not unique!! You''re no duchamp, use your own work'

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User'

    has_many :artwork_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: 'ArtworkShare'

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer

    has_many :comments,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: 'Comment'

    has_many :likes, as: :likeable

    has_many :user_likes,
        through: :likes,
        source: :user

    def self.art_to_view(user_id)
        user = User.find(user_id)
        to_view = []
        created = Artwork.where(artist_id: user_id)
        shared = user.shared_artworks
        to_view += created
        shared.each do |ele|
            to_view << ele unless to_view.include?(ele)
        end
        to_view
    end
        
end