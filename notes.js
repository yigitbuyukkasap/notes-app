const { timeLog } = require("console");
const chalk = require('chalk');
const fs = require("fs");

const getNotes = () => {
	return "Your Notes";
};

const readNote = (title) => {

}
const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body,
		});
			savedNotes(notes);
		console.log(chalk.green('New note added!'));
	} else
		console.log(chalk.red('Note title already used!'));

};

const removeNote = (title) => {
	const notes = loadNotes();
	const noteToKeep = notes.filter((note) => {
		return note.title !== title;
	});
	if (notes.length === noteToKeep.length) {
		console.log(chalk.red('Note not found'));
	} else {
		savedNotes(noteToKeep);
		console.log(chalk.green('Note removed'));
	}

}
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

const savedNotes = (notes) => {
	const newNote = JSON.stringify(notes);
	fs.writeFileSync('notes.json', newNote);
}
const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.inverse('Your Notes'));
	notes.forEach(note => {
		console.log('Title:', note.title);
	});
}
module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote,
};
