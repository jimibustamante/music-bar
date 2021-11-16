const express = require('express')
const cors = require('cors')
const routerApi = require('./routes/index.js')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

routerApi(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
