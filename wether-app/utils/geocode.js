const request = require("request")

const geocode = (adress,callback)=>{
	const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURI(adress)+".json?access_token=pk.eyJ1IjoibWFuaXNoLWhvb2RhIiwiYSI6ImNrNHdyZmhxYjA1Z3QzbG1sb2RmYmpwaXkifQ.Fk9gYn2v565P3EaGn4hixA&limit=1"
	request({ url : url , json : true },(error,response)=>{
		if(error){
		callback("Unable to connect with location service.",undefined)
	}else if(response.body.message === "Not Found"){
		callback("Enter the location.",undefined)
	}else if(response.body.features.length === 0){
		callback("Unable to find the location try another serch.",undefined)
	}else{
		const placeName = response.body.features[0].place_name
		const longitude =response.body.features[0].center[0]
		const latitude = response.body.features[0].center[1]
		callback(undefined,{
			placeName : placeName,
			longitude : longitude,
			latitude : latitude
		})
	}
	})
}

module.exports = geocode 