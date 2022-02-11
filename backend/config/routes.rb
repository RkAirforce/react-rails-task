Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :top, only: %i[index]
      resources :tasks, except: %i[new]
    end
  end
end
