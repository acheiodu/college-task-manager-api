let express = require('express')
// let bodyParser = require('body-parser')
let mongoose = require('mongoose')

let app = express()

mongoose.connect('mongodb://user:1234@ds151963.mlab.com:51963/mongohost', { useMongoClient: true });
mongoose.Promise = global.Promise;

// app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => {
  console.log('Howdy')
  res.send({key: 'assignment', value: 'Inteligência Artificial'})
  // let Assignment = mongoose.model('Assignment', {type: String, subject: String})
  // let assignment = new Assignment({type: 'Prova', subject: 'Inteligência Artificial'})
  // assignment.save((err, data) => {
  //   if (err) {
  //     res.send(err)
  //   } else {
  //     res.send(data)
  //   }
  // })
})

app.get('/api/assignments', (req, res) => {
  let assignments = [
    {
      type: 'Prova',
      subject: 'Inteligência Artificial',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Tarefa',
      subject: 'Inteligência Artificial',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'Compiladores',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Atividade do Edmodo.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'Compiladores',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'Compiladores',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Tarefa',
      subject: 'Computação Paralela',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'EAD - Antropologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'EAD - Antropologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'EAD - Antropologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Atividade',
      subject: 'EAD - Sociologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI. Criar um modelo de machine learning com base em algum dataset do site UCI.',
      status: 'Pendente',
      grade: 0
    },
    {
      type: 'Prova',
      subject: 'EAD - Sociologia',
      requestDate: new Date(),
      dueDate: new Date(),
      description: 'K-fold Cross Validation',
      status: 'Pendente',
      grade: 0
    }
  ]
  res.send(assignments)
})

app.listen(3000, () => console.log('Serving on port 3000...'))