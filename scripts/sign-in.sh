curl -v -i http://tic-tac-toe.wdibos.com/sign-in \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "dale1@dobson.com",
    "password": "password"
  }
}'
