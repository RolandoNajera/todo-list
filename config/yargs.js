const description = {demand: true, alias: 'd'};
const completed = {default: true, alias: 'c'};

const argv = require('yargs')
    .command('list', 'Show the list of ToDo.')
    .command('create', 'Create an Item in ToDo list.', {description})
    .command('delete', 'Delete an Item in ToDo list.', {description})
    .command('update', 'Update an Item in ToDo list.', {description, completed})
    .help()
    .argv;

    module.exports = { argv }