# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create(username: 'js@email.com')
User.create(username: 'ro@email.com')

Artwork.create(title: 'Green Soup', image_url: 'gs@google.com', artist_id: 1)
Artwork.create(title: 'Water Filter', image_url: 'slack@slacking.com', artist_id: 2)
Artwork.create(title: 'Water Filter', image_url: 'copycat', artist_id: 1)

ArtworkShare.create(artwork_id: 1, viewer_id: 2)
ArtworkShare.create(artwork_id: 2, viewer_id: 1)
ArtworkShare.create(artwork_id: 3, viewer_id: 1)

Comment.create(artwork_id: 3, user_id: 2, body: 'i think this is pure plagarism(?)')
Comment.create(artwork_id: 3, user_id: 1, body: 'sucks to suck, trash baggins')

Like.create(artwork_id: 1, user_id: 1, comment_id: nil)
Like.create(artwork_id: 1, user_id: 2, comment_id: nil)
Like.create(artwork_id: 3, user_id: 1, comment_id: nil)
Like.create(artwork_id: 2, user_id: 2, comment_id: nil)

# likeable? likes? ?? ??????