// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');

// Start up an instance of app
const app=express();
/* Middleware*/
const cors = require('cors');


const bodyParser = require('body-parser');
// app.use(bodyParser());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));



app.get('/data', function (req, res) {
  console.log("get request");
  console.log(projectData);
   res.send(projectData);
})


// app.get('/', function (req, res) {
//     res.send(projectData);
//   })

  app.post('/', function(req, res) {
    // projectData['date'] = req.body.date;
    // projectData['temp'] = req.body.temp;
    // projectData['content'] = req.body.content;
    console.log("post request");
    projectData = req.body;
    console.log(projectData);
    res.send(projectData);
  })

// Setup Server

  const port = 8000;
  const server = app.listen(port, listening);
  
  function listening() {
    console.log(`running on localhost: ${port}`);
  };