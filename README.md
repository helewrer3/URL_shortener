# URL Shortener
A simple URL shortener made to be used by anyone and everyone for free.

### The app has been deployed to [heroku](https://shortewrer3.herokuapp.com/)!

## Technologies Used
+ NodeJS
+ Express
+ SQLite3 (for local deployment)
+ PostgreSQL (for heroku deployment)
+ Sequelize
+ Bootstrap
+ HTML, CSS, Javascript, SQL

## Usage
Upon entering, the user is asked to input a URL that he wants shortened. \
After submitting said URL, the user obtains a shortened URL that he can use as an alias to the original one.

## Deploying Locally
Since the DBMS used is SQLite, you don't need to set up a server. \
Simply clone the repo locally and run the following commands at the root of the project - 
```
  npm install
  npm start
```
Log into the port number 3000 or whatever port number you have set as your environment variable of node.

### Dependencies
To run this app locally, you need to have [NodeJS](https://nodejs.org/en/) installed in your system.
