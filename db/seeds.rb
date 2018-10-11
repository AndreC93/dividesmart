# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create(username: 'Divider', email: 'demo@login.com', password: 'demologin')
User.create(username: 'jean', email: 'jean@yahoo.com', password: 'jeanjeanjean')
User.create(username: 'jackson', email: 'jackson@yahoo.com', password: 'jacksonjacksonjackson')
User.create(username: 'fernando', email: 'fernando@yahoo.com', password: 'fernandofernandofernando')
User.create(username: 'jeff', email: 'jeff@yahoo.com', password: 'jeffjeffjeff')
User.create(username: 'matt', email: 'matt@yahoo.com', password: 'mattmattmatt')
User.create(username: 'clam', email: 'clam@yahoo.com', password: 'clamclamclam')
User.create(username: 'snoop', email: 'snoop@yahoo.com', password: 'snoopsnoopsnoop')
User.create(username: 'dinosaur', email: 'dinosaur@yahoo.com', password: 'dinosaur')
User.create(username: 'jack', email: 'jack@yahoo.com', password: 'jackjackjack')
User.create(username: 'jill', email: 'jill@yahoo.com', password: 'jilljilljill')
User.create(username: 'hansel', email: 'hansel@yahoo.com', password: 'hanselhanselhansel')
User.create(username: 'gretal', email: 'gretal@yahoo.com', password: 'gretalgretalgretal')

Bill.destroy_all
Bill.create(creator_id: User.first.id, category: 'General', description: 'Bike', balance_cents: 50000)
Bill.create(creator_id: User.first.id, category: 'Food and drink', description: 'Spaghetti', balance_cents: 50000)
Bill.create(creator_id: User.first.id, category: 'Food and drink', description: 'A Single Beer', balance_cents: 50000)
Bill.create(creator_id: User.first.id, category: 'General', description: 'Trombone', balance_cents: 50000)
Bill.create(creator_id: User.first.id, category: 'General', description: 'Elephant', balance_cents: 50000)
Bill.create(creator_id: User.first.id, category: 'General', description: 'tuition..', balance_cents: 2800000)
Bill.create(creator_id: User.all[1].id, category: 'General', description: 'Car', balance_cents: 50000)
Bill.create(creator_id: User.all[2].id, category: 'General', description: 'Ice Cube', balance_cents: 50000)

Payment.create(bill_id: Bill.first.id, user_id: User.first.id, amount_cents: )
