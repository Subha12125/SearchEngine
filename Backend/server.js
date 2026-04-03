const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const searchRouter = require('./src/routes/search.route');

app.use(searchRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
