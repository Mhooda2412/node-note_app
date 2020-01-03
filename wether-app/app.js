const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast") 

const address = process.argv[2]
if(!address){
	console.log("Enter the address.")
}else{
	geocode(address,(error,{latitude,longitude, placeName})=>{
	if(error){
		console.log(error)
	}else{
		forecast(latitude,longitude, (error, forecastdata) => {
  			if(error){
			console.log(error)
			}else{
			console.log(placeName)
			console.log(forecastdata)
		}
		})
	}
})


}







