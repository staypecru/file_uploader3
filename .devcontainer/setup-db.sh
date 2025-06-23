#!/bin/bash

bin/rails db:create
bin/rails db:migrate

bin/rails runner "ActiveRecord::Base.connection.create_database('myapp_queue')"

bin/rails runner "ActiveRecord::Base.establish_connection(:queue); load(Rails.root.join('db', 'queue_schema.rb'))"