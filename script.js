let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchinput=document.getElementById("search-input");
const searchbutton=document.getElementById("search-button");

searchbutton.addEventListener('click',(e)=>
{
  e.preventDefault();
  getweather(searchinput.value);
  searchinput.value='';
})
function getweather(city){
try{

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1246ac0b13485533594acedb4dcb97c`

      // Using fetch to get data
      fetch(api).then((response) => {
          return response.json();
        })
        .then((weatherdata) => {
          console.log(weatherdata);
          const {name} = weatherdata;
          const {feels_like}= weatherdata.main;
          const {id,main} =  weatherdata.weather[0];
          
          loc.textContent=name;
          tempvalue.textContent=Math.round(feels_like-273);
          climate.textContent=main;
        })
      }
    catch{
      alert('city not found')
    }    
}

window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
     
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b1246ac0b13485533594acedb4dcb97c`

      // Using fetch to get data
      fetch(api).then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const {name} = data;
          const {feels_like}= data.main;
          const {id,main} = data.weather[0];
          
          loc.textContent=name;
          tempvalue.textContent=Math.round(feels_like-273);
          climate.textContent=main;
        });
    });
  }
}
});