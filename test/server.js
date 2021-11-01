projectData = {};
const express= require('express');
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

app.post('/', function (req, res) {
    console.log("post request");
    res.send({"message": "ok"});
})

const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log(`running on localhost: ${port}`);
};