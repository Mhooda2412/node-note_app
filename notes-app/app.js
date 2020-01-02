//importing required modules
const Notes = require('./notes.js')
const validator = require('validator')
const yargs = require('yargs')

//defining the yargs command to take input from command line
//Add command for adding new notes
yargs.command({
	command:"add",
	describe:"adding new notes",
	builder :{
		title:{
			describe:"title of note",
			demandOption:true,
			type:'string'
		},
		body:{
			describe:"body of note",
			demandOption:true,
			type:'string'
		}
	},
	handler: (argv)=>Notes.addNote(argv.title,argv.body)	
})

// remove command to remove a note
yargs.command({
	command:"remove",
	describe:"removing notes",
	builder:{
		title:{
			describe:"title of node to be removed",
			demandOption:true,
			type:'string'
		}
	},
	handler:(argv)=>Notes.removeNote(argv.title)
})

// list all the notes

yargs.command({
	command:"list",
	describe:"listing all note",
	handler:()=>Notes.listNotes()
})

// read the specified note 

yargs.command({
	command:"read",
	describe:"read a note",
	builder:{
		title:{
			describe:"title of node to be removed",
			demandOption:true,
			type:'string'
		}
	},
	handler:(argv)=>Notes.readNote(argv.title)
})

//calling yargs 
yargs.parse()
