const yargs = require('yargs');
const { addNotes, printNotes, removeNotes } = require('./controler');
const pkg = require('./package.json');
yargs.version(pkg.version);

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'note title',
      demandOption: true,
    },
  },
  handler({ title }) {
    addNotes(title);
  },
});
yargs.command({
  command: 'list',
  describe: 'Print all notes',
  async handler() {
    printNotes();
  },
});
yargs.command({
  command: 'remove',
  describe: 'delete  notes',
  builder: {
    id: {
      type: 'string',
      describe: 'delete notes',
      demandOption: true,
    },
  },
  handler({ id }) {
    removeNotes(id);
  },
});

yargs.parse();
