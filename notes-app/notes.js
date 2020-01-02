//importing file system module
const fs = require("fs")
const chalk = require("chalk")

//getNotes function

/*const getNote =()=>{
	return "your notes"
}*/

//adding new note

const addNote =(title , body)=>{
	const notes = lodeNotes()
	const dublicateNote = notes.find((note)=>note.title === title)
	if(!dublicateNote){
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

// lising the notes 

const listNotes = ()=>{
	console.log(chalk.green("Your notes"));
	const notes = lodeNotes()
	notes.forEach((note)=>console.log(note.title))
}

//read note
const readNote = (title)=>{
	try{
		const notes = lodeNotes()
		const readnote = notes.find((note)=>note.title === title)
		console.log(chalk.bold.green.inverse(readnote.title));
		console.log(readnote.body)
	}catch(e){
		console.log(chalk.bold.red.inverse("note with the given title is not found"))
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



//exporting getnotes and addNote function

module.exports = {
	addNote : addNote,
	removeNote : removeNote,
	listNotes : listNotes,
	readNote :readNote
}