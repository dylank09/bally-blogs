if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_bally-blogs', domain: 'client'
  else
    Rails.application.config.session_store :cookie_store, key: '_bally-blogs' 
  
end

#double check this 


