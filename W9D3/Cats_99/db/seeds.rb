# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# create_table "cats", force: :cascade do |t|
#     t.date "birth_date", null: false
#     t.string "color", null: false
#     t.string "name", null: false
#     t.string "sex", limit: 1, null: false
#     t.text "description"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end



c1 = Cat.create!(birth_date: '1900/01/01', color: 'umber', name: 'dweoije', sex: 'M',description: 'sweet baby angel gumdrop lovely amazing huge')
c2 = Cat.create!(birth_date: '1964/01/01', color: 'fuscia', name: 'Pam', sex: 'M',description: 'mad about the gender binary' )
c3 = Cat.create!(birth_date: '1964/01/01', color: 'fuscia', name: 'Pam', sex: 'F',description: 'also mad about the gender binary')
c4 = Cat.create!(birth_date: '1999/10/01', color: 'red', name: 'Kimiko', sex: 'F',description: 'totes the dopest as hell cat')
c5 = Cat.create!(birth_date: '1900/08/01', color: 'lime green', name: 'Claudio-Jacinto', sex: 'M',description: 'he is fancy boy')
c6 = Cat.create!(birth_date: '1201/07/19', color: 'umber', name: 'Cat', sex: 'F',description: 'cats nice')
c7 = Cat.create!(birth_date: '2003/01/01', color: 'blue', name: 'Rocky', sex: 'F',description: 'loves to cuddle and eat bread')
c8 = Cat.create!(birth_date: '1900/01/01', color: 'umber', name: 'Rachel', sex: 'F',description: 'scratches you on purpose')
c9 = Cat.create!(birth_date: '1992/01/01', color: 'hunter green', name: 'Mariah', sex: 'F',description: 'catsplains')

