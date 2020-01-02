const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast") 

const address = process.argv[2]
if(!adress){
	console.log("Enter the address.")
}else{
	geocode(address,(error,data)=>{
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


}







