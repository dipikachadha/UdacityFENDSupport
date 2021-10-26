/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=3e4e9811f1372c72678cc60e76137f0d';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = 1+d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// get the temp from openWeatherMap API
const getWeatherData = async (baseURL, zip, key)=>{
  const newCity = await fetch(baseURL + zip + apiKey);
      try{
      const data = await newCity.json();
      console.log(data);
      return data;
      } catch(error){
      console.log("sorry this is not a correct zipcode", error);
      }
}
// from udacity course boilerplate
const postData = async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}
// addEventlistener
document.getElementById('generate').addEventListener('click', performAction);
function performAction(e){
    e.preventDefault();
    const zip =document.getElementById('zip').value;
    const feelings =document.getElementById('feelings').value;
    getWeatherData(baseURL,zip, apiKey) // get data from API
    .then(data => postData('/postData',{
      temp: data.main.temp,
      date: newDate,
      feelings: feelings
      })
    )
    .then(res => updateUI(e));
 };

  //updateUI function -push data on browser
 async function updateUI(e) {
    const request = await fetch('/all'); //the route should be same with the GET route in server end,
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('content').innerHTML = allData.feelings;

    } catch (error) {
        console.log("UI data couldnot be updated", error);
    }
}
