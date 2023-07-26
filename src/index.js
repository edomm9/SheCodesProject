function weatherDisplay(response) {
  let temprature = Math.round(response.data.main.temp);
  let display = document.querySelector("h3");
  display.innerHTML = `Currently ${temprature}℃`;
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  let h2 = document.querySelector("h2");
  h2.innerHTML = city;
  console.log(city);
  const apiKey = "7aed9d314ed9018ce92ea1322bc9125a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDisplay);
}
let form = document.querySelector("#form");
form.addEventListener("click", search);

let input = document.querySelector("#searchCity");
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    search(event);
  }
});
let time = new Date();
let option = { hour: `2-digit`, minute: `numeric`, hour12: true };
let formattedTime = time.toLocaleTimeString(`en-US`, option);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = document.querySelector(".time");
date.innerHTML = `${days[time.getDay()]} ${formattedTime}`;
