class ApplicationController < ActionController::Base
    
  helper ApplicationHelper
  skip_before_action :verify_authenticity_token
  

end
