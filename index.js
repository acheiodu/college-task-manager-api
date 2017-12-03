let express = require('express')

let app = express()

app.route('/')
  .get((req, res) => res.send('Hello, World!'))

app.listen(8080, () => console.log(`Server running on port 8080...`))
