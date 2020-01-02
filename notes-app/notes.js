//importing file system module
const fs = require("fs")
const chalk = require("chalk")

//getNotes function

const getNotes =()=>{
	return "your notes"
}

//adding new note

const addNote =(title , body)=>{
	const notes = lodeNotes()
	const dublicateNotes = notes.filter((note)=> note.title === title)
	if(dublicateNotes.length===0){
		notes.push({
			title: title,
			body:body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse("Sucessfuly added note"));	
	}
	else {
		console.log(chalk.yellow.inverse("title is already taken"));
	}
}

//remove node fuction 
const removeNote = (title)=>{
	const notes = lodeNotes()
	const notesToKeep = notes.filter((note)=>note.title !== title)
	if(notesToKeep.length<notes.length){
		saveNotes(notesToKeep)
		console.log(chalk.green.inverse("Sucessfuly removed "));
	}else{
		console.log(chalk.red.inverse("note not found"));
	}
}

//lode the alreade saved notes

const lodeNotes = ()=>{
	try{
		const dataBuffer = fs.readFileSync("Notes.json")
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)

	}catch(e){
		return []

	}

}

//saving the notes 

const saveNotes = (notes)=>{
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("Notes.json", dataJSON)
}

// lising the notes 

const listNotes = ()=>{
	console.log(chalk.green("Your notes"));
	const notes = lodeNotes()
	//console.log(notes);
	notes.forEach((note)=>console.log(note.title))
}

//exporting getnotes and addNote function

module.exports = {
	getNotes : getNotes,
	addNote : addNote,
	removeNote : removeNote,
	listNotes : listNotes
}