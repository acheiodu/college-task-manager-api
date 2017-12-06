let bodyParser = require('body-parser')
let express = require('express')
let mongoose = require('mongoose')

let assignmentController = require('./controllers/assignment.server.controller')

mongoose.connect('mongodb://user:1234@ds151963.mlab.com:51963/mongohost', {useMongoClient: true}, (err) => console.log(err));
mongoose.Promise = global.Promise;

let app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.route('/')
  .get((req, res) => res.send('College Task Manager'))

app.route('/assignments')
  .get((req, res) => assignmentController.find(req, res))
  .post((req, res) => assignmentController.save(req, res))

let server = app.listen(process.env.PORT || 8080, () => console.log(`Serving on port ${server.address().port}...`))
