require 'spec_helper'

feature 'api' do

  scenario 'API is available at /json' do
    visit '/'
    fill_in :post_submission, with: 'message'
    click_button 'Submit'
    visit '/json'
    expect(page).to have_content('message')
  end

end
