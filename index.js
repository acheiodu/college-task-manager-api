let bodyParser = require('body-parser')
let express = require('express')
let mongoose = require('mongoose')

let assignmentController = require('./controllers/assignment.server.controller')

mongoose.connect('mongodb://user:1234@ds151963.mlab.com:51963/mongohost', {useMongoClient: true});
mongoose.Promise = global.Promise;

let app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.route('/api')
  .get((req, res) => res.send('College Task Manager API'))

app.route('/api/assignment')
  .get((req, res) => assignmentController.find(req, res))
  .post((req, res) => assignmentController.save(req, res))

app.listen(3000, () => console.log('Serving on port 3000...'))
