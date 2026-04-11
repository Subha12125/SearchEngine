require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const searchRouter = require('./src/routes/search.route');
const connectDB = require('./src/db/connect.db');

connectDB();

app.use('/search', searchRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
