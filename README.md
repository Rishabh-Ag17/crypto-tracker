# Crypto Tracker

Description
The Crypto Tracker is a Node.js application that fetches real-time cryptocurrency data for Bitcoin, Matic, and Ethereum using the CoinGecko API. The application stores the data (price, market cap, and 24-hour change) in a local MongoDB database every 2 hours using a background job. It also exposes two REST APIs:
1. /stats: Retrieves the latest data for a requested cryptocurrency.
2. /deviation: Calculates the standard deviation of the cryptocurrency prices from the last 100 records stored in the database.
This project focuses on backend development, handling background jobs, and interacting with APIs to track cryptocurrency statistics. MongoDB is used as the local database for storing data.

Features - 
1. Background Job: Fetches cryptocurrency data for Bitcoin, Matic, and Ethereum from the CoinGecko API every 2 hours and stores it in the database.
API Endpoints:
1.1. /stats: Returns the latest data for a given cryptocurrency (Bitcoin, Matic, or Ethereum).
1.2. /deviation: Returns the standard deviation of the prices from the last 100 records of a cryptocurrency.
2. MongoDB: Stores cryptocurrency data locally using MongoDB.

Challenges Faced
1. MongoDB Atlas Authentication Failure
During the initial phase of the project, I attempted to use MongoDB Atlas as the database solution for remote hosting. However, I encountered authentication errors when trying to connect the application to Atlas using the connection string.
The error was related to incorrect authentication credentials, despite having correct username and password for the MongoDB Atlas cluster.
After troubleshooting, I found that the connection string format or IP whitelisting issues were the likely causes.
As a result, I couldn't proceed with hosting the application on Heroku using MongoDB Atlas. Instead, I decided to set up local MongoDB on my machine for the project.

Future Improvements
1. Implement MongoDB Atlas as the remote database to make the application scalable and deploy it to Heroku or another cloud platform.
2. Add more cryptocurrency tracking features, such as price history or prediction models.
3. Implement logging and better error handling for production-ready deployment.
