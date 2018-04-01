let bodyParser = require('body-parser')
let express = require('express')
let mongoose = require('mongoose')

let assignmentRouter = require('./routers/assignment.router')
let userRouter = require('./routers/user.router')
let auth = require('./auth')

mongoose.connect('mongodb://user:1234@ds151963.mlab.com:51963/mongohost', {useMongoClient: true}, (err) => {
  if (err) {
    console.log(err)
  }
});
mongoose.Promise = Promise;

let app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use('/auth', auth.router)

app.use('/assignment', auth.checkToken, assignmentRouter)

app.use('/user', auth.checkToken, userRouter)

let server = app.listen(process.env.PORT || 3000, () => console.log(`Serving on port ${server.address().port}...`))
