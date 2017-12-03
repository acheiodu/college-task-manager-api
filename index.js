let bodyParser = require('body-parser')
let express = require('express')

let app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.route('/')
  .get((req, res) => res.send('Hello, World!'))

let port = env.port || 3000

app.listen(port, () => console.log(`Serving on port ${port}...`))
