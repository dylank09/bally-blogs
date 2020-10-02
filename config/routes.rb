Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "main_page#home"

  resources :posts

  namespace 'api' do
    namespace 'v1' do
      resources :posts
    end
  end

end
