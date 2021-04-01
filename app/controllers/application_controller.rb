class ApplicationController < ActionController::Base
  before_action :set_site_lang_options
  before_action :set_site_welcome_options
  before_action :set_welcome_form_options
  before_action :set_site_navbar_options
  before_action :set_site_chat_options
  CONFIG = YAML.load_file("#{Rails.root}/config/site_info.yml")
end
