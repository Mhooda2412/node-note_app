const request = require("request")
const forecast = (latitude,longitude,callback)=>{
	const url = "https://api.darksky.net/forecast/69ccc6e7c4b929cd78b8a58279355af1/"+latitude+","+longitude+"?units=si"
	request({ url, json : true },(error,{body})=>{
		if(error){
		callback("Unable to connect with location service.",undefined)
	}else if(body.error){
		callback("Unable to find the location try another serch.",undefined)
	}else{
		const temp = body.currently.temperature
		const rainProbability = body.currently.precipProbability
		callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
	}
	})	

}


module.exports = forecast







	
	
	



