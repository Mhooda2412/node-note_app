const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast") 

geocode(process.argv[2],(error,data)=>{
	if(error){
		console.log(error)
	}else{
		forecast(data.latitude, data.longitude, (error, forecastdata) => {
  			if(error){
			console.log(error)
			}else{
			console.log(data.placeName)
			console.log(forecastdata)
		}
		})
	}
})


