const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Notes body here',
			demandOption: true,
			type: 'string',
		},
	},
	handler: function (argv) {
		notes.addNote(argv.title, argv.body);
	},
});
yargs.command({
	command: 'remove',
	describe: 'Add a new note',
	demandOption: true,
	type: 'string',
	handler: function (argv) {
		notes.removeNote(argv.title)
	},
});
yargs.command({
	command: 'list',
	describe: 'listing notes',
	type: 'string',
	handler: function () {
		notes.listNotes()
	},
});
yargs.command({
	command: 'read',
	describe: 'reading notes',
	handler: function () {
		console.log('reading notes');
	},
});

yargs.parse();
