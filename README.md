# README

## Preparation of DB
```
bundle exec rake db:create db:migrate db:seed
```

## Running Server in local

### Option1. Run Web Server and BackendAPI Server in one command
```
rake start
```

### Option2. Run Each Server 
```
# BackendAPI Server
bundle exec rails s -p 3001
# Web (Client) Server
cd client && npm start
```

--- 
## Structure
localhost:3000      -- Web
localhost:3001/api/ -- API
