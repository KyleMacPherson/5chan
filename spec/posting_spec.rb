require 'spec_helper'

feature 'Anons posting' do

  scenario 'Can see the post on the homepage' do
    Post.create(post: "Anonymous message content")
    visit '/'
    expect(page).to have_content("Anonymous message content")
  end

  scenario 'Can show multiple posts' do
    Post.create(post: "Anonymous message content")
    Post.create(post: "Another anonymous message for testing")
    visit '/'
    expect(page).to have_content("Anonymous message content
    Another anonymous message for testing")
  end

  scenario 'Post can be made' do
    visit '/'
    fill_in :post_submission, with: "New post here"
    click_button "Submit"
    expect(page).to have_content("New post here")
  end

end
