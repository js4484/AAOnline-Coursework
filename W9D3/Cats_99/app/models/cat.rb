# == Schema Information
#
# Table name: cats
#
#  id         :bigint           not null, primary key
#  birth_date :date             not null
#  color      :string           not null
#  name       :string           not null
#  sex        :string(1)        not null
#  text       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'action_view'

class Cat < ApplicationRecord
   include ActionView::Helpers::DateHelper
   
    COLORS = ['red', 'blue', 'fuscia', 'lime green', 'hunter green', 'calico', 'umber']

    validates :color, inclusion: { in: COLORS}, presence: true
    validates :sex, inclusion: { in: %w(M F)}, presence: true
    validates :birth_date, presence: true
    validates :description, presence: true 
    validates :name, presence: true
    
    def age        
        time_ago_in_words(birth_date)
    end    
end