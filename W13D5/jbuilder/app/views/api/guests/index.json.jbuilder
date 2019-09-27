# json.guests do 
#     @guests.each do |guest|
#         # debugger
#         json.set! guest.id do 
#             json.partial! "/api/guests/guest", guest: guest
#         end
        
#     end
# end

json.array! @guests do |guest|
    json.partial! "/api/guests/guest", guest: guest
end