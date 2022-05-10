# Kongcepts Interview Assignment

## Overview

### This project uses express as the backend and react as the frontend and mongodb as the database.

## Requirements

- Mongodb

- Node

- React

# Setup

## 1.Seting up the backend

- Import the sample data from the db folder to your mongodb database.
- Goto backend folder and run

```
 npm i
```

- Create .env file in that directory and add the following data.

```
ATLAS_URI = YOUR_MONGODB_CONNECTION_STRING
KEY = kongcepts
```

## 2.Seting up the frontend

- Goto root directory and run

```
npm i
```

# Starting the application

1. To start the application first goto backend folder and open up a terminal/ command window and then run the following command

```
nodemon server
```

2. If the backend connection were successfull you should see following output in your terminal.

```
MongoDB database connection established successfully
```

3. Then goto front end folder and again open up a new terminal/ comand window and run the following command.

```
npm start
```

# Sample Login

- After the frontend lauched you may require to login use following credentials to login easily.

```
Username- admin
Password - admin
```
