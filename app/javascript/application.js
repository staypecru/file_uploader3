// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { start } from "@rails/activestorage"
start()
import "controllers/upload_progress_controller"