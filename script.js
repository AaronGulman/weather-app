const apiKey = "04b6087153a6ea19b473f36c25f154a3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bogota";


async function checkWeather(){
	const response = await fetch(apiUrl + `&appid=${apiKey}`);
	var data = await response.json();

	console.log(data)
}
checkWeather()