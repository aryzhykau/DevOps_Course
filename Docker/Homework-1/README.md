# Add dockerfiles to both services, and try to run them 
## MakeUpShop
This is a react frontend application, that needs to be deployed with docker


create multi stage dockerfile, which will include:
- ```base``` image with dependencies
- ```dev``` image which will run ```npm run start```
- ```main``` image which will build static files from sources and store them in nginx



- App uses env variable API_BASE_URL for connecting with backend.
- App listens on port 3000 by default, but nginx listens on port 80

To install dependencies use ```npm install``` command


## margo_api

This is python backed app which will provide logic to the makeupshop,


create multi stage dockerfile, which will include
- ```base``` image with only dependencies from requirements.txt installed
- ```main``` image with full app working 


You should then vuild these two images and run them and check that applications are working together
