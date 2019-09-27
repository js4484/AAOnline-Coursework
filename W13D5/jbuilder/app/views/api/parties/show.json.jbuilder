json.partial! "/api/parties/party" party: @party

json.party do 
    @party.guests.each do |guest|
        json.set! guest.id do 
            json.partial! "/api/guests/guest" guest: guest
        end
    end
end