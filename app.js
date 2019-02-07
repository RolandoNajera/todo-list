const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./todo-list/todo-list');

let command = argv._[0];

switch (command) {
    case 'create':
        let item = todo.create(argv.description);
        console.log( item );
    break;
    case 'list':
        let list = todo.getList();
        console.log('==================='.green);
        for(let item of list) {
            console.log(`${ item.description } - Status: ${ item.completed }`.green);
        }
        console.log('=================='.green);
    break; 
    case 'update':
        let updated = todo.update(argv.description, argv.completed);
        console.log(updated);
    break;
    case 'delete':
        let deleted = todo.deleted(argv.description);
        console.log(deleted);
    break;
    default:
        console.log('Command no valid.')
    break;
}