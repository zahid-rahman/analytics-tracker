# Analytics tracker API

## An API that logs whenever a user "visits" a page or hits an endpoint — storing the path and timestamp to MongoDB.

### Endpoints:

1. GET /track?page=/home

2. GET /stats 

3. GET /stats?page=/about

4. GET /stats?date=2025-07-15



### mongodb schema

_id: ObjectId,
page: string,
timestamp: ISODate
date: string
userAgent: string
ip: string

### data format 

{
  _id: ObjectId,
  page: "/home",
  timestamp: ISODate,        // new Date()
  date: "2025-07-15",        // derived from timestamp
  userAgent: "Mozilla/5.0",  // optional
  ip: "127.0.0.1"            // optional
}

### must have installed
- Docker, nodejs

### installation process

- run `docker compose up -d` for running the mongodb database
- run `npm install` to install all dependencies
- run `npm start` to spin the server
