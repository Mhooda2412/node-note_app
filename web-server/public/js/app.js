console.log('Client side javascript file is loaded!')




const searchForm = document.querySelector("form")
const searchInput = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messagetwo = document.querySelector("#message-2")
 
searchForm.addEventListener("submit",(event)=>{
	event.preventDefault()
	
	const address = searchInput.value  


	fetch("http://localhost:3000/weather?address="+address).then((res)=>{
	res.json().then((data)=>{
		if(data.error){
			return  messageOne.textContent = data.error
		}
		messageOne.textContent = data.placeName
		messagetwo.textContent = data.forecast



	})

})


})




