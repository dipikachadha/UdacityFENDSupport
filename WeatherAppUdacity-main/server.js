
/* Empty JS object to act as endpoint for all routes */
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);

function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};
// POST route
app.post('/postData', postData);
function postData (req,res){
  let data = req.body;
  console.log(data);
  projectData.temp=data.temp;
  projectData.date=data.date;
  projectData.feeling=data.feelings;
  res.send(projectData);
  console.log(projectData);
};
// GET route
app.get('/all', sendData);
function sendData (request, response) {
    console.log(projectData);
  response.send(projectData);
};
