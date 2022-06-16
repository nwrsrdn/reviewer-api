const express = require('express')

const app = express()

const port = process.env.PORT || 5000

app.get('/app', (req, res) => {
  res.send({
    app: 'hey hey'
  })
})

app.listen(port, () => {
  console.log(`Server is up on port: ${ port }`)
})

module.exports = app;
