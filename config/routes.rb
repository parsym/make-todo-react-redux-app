Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  post 'get_name', to: 'hello_world#get_name'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
