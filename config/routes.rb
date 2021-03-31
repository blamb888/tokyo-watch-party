Rails.application.routes.draw do
  # get 'video/landing'
  # get 'video/index'
  # get 'video/screenshare'
  # get 'video/name'
  # get 'video/chat'
  # Generated routes ^
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/', to: 'video#landing'
  get '/party', to: 'video#index'
  get '/screenshare', to: 'video#screenshare'
  post '/name', to: 'video#name'
  post '/chat/send', to: 'video#chat'
end
