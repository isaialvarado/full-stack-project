# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

#Jbuilder convert keys to camelCase
Jbuilder.key_format camelize: :lower
