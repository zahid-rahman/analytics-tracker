# Analytics Tracker API

 An API that logs whenever a user "visits" a page or hits an endpoint — storing the path and timestamp to MongoDB.

### Endpoints:

1. GET /track?page=/home

2. GET /stats 

3. GET /stats?page=/about

4. GET /stats?date=2025-07-15



### Mongodb schema

_id: ObjectId <br />
page: string <br />
timestamp: ISODate <br />
date: string <br />
userAgent: string <br />
ip: string <br />

### Data format 

```
{
  _id: ObjectId,
  page: "/home",
  timestamp: ISODate,        // new Date()
  date: "2025-07-15",        // derived from timestamp
  userAgent: "Mozilla/5.0",  // optional
  ip: "127.0.0.1"            // optional
}
```

### Must have installed
- `Docker`, `Nodejs`

### Installation process

- Run `docker compose up -d` for running the mongodb database
- Run `npm install` to install all dependencies
- Run `npm start` to spin the server
