## Follow the Steps to Start the Application
### Let's begin with setting up a MongoDb server


### I have used a docker container to setup MongoDb server

`### sudo docker create -it --name MongoStore -p 2700:27017 mongo`
`### sudo docker start MongoStore`
`### sudo docker ps`



### Make sure your are in the root directory of this repository.

`### cd api`

### To install all the dependencies run command 
`### pip install -r requirements.txt`

### Now let's add a SENDGRID API KEY
`### cd route`

### Now open `user.py` in any text Editor and add the SENDGRID API KEY at the provided place holder also replace the Sender Email

Go a folder back 
`### cd ..`

### To start the API run command
`### python run.py`

### Once done with setting up the API sevice, next up let's setup the React Client


`### cd ..`

`### cd task-client`

### Run 
`### npm install`

### it will install all the packages

### Once it finishes run command

`### npm start `

### This will take a while and the Client will load.
