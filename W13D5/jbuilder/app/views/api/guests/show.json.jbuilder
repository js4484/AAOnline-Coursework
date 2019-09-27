json.partial! "/api/guests/guest", guest: @guest

json.gifts do
    # debugger
    @guest.gifts.each do |gift|
        json.set! gift.id do 
            json.partial! "/api/gifts/gift", gift: gift
        end
    end
end

# json.gifts @guest.gifts, partial: 'api/gifts/gift', as: :gift
