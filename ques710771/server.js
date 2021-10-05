var express = require('express')
var app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

app.use(express.static('website'))

const port = 3000

const server = app.listen(port, listening)

function listening() {
    console.log(`running on ${port}`);
}

// Create JS object
const appData = {}
// Respond with JS object when a GET request is made to the homepage
app.get('/all', sendData)

function sendData (req, res) {
  res.send(appData)
}

app.post('/add', callBack)

function callBack(req,res){
    res.send('POST received')
}

const data=[];
app.post('/addAnimal', addAnimal)
function addAnimal (req, res) {
    let data = req.body
    console.log(data)
}