class ApplicationController < ActionController::API
    before_action :configure_permitted_parameters, if:  :devise_controller?


    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :email, :password, :password_confirmation, :remember_me])
        devise_parameter_sanitizer.permit(:sign_in, keys: [:login, :email, :password, :remember_me])
        devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :email, :password, :password_confirmation, :current_password])
        
    end


    private

    def after_sign_out_path_for(user)
        new_user_session_path
    end

    def after_sign_in_path_for(user)
        root_path #or posts_path ?
    end

end
