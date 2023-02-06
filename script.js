const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7813cd3ad4msh62d9ae8ac9e0083p12e799jsn3b1d77373bf2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}
const getWeather=(city) =>{
	cityName.innerHTML=city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(( response ) => {console.log(response)

Cloud-pct.innerHTML = response.Cloud-pct
feels-like.innerHTML=response.feels-like
Humidity.innerHTML=response.Humidity
Max-temp.innerHTML=response.Max-temp
Min-temp.innerHTML=response.Min-temp
Sunrise.innerHTML=response.Sunrise
Sunset.innerHTML=response.Sunset
Temp.innerHTML=response.Temp
Wind-degrees.innerHTML=response.Wind-degrees
Wind-speed.innerHTML=response.Wind-speed	
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")