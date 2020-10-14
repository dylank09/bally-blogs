if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_bally-blogs', domain: 'http://localhost:3000'
  else
    Rails.application.config.session_store :cookie_store, key: '_bally-blogs' 
  
end

#double check this 


