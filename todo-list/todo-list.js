const fs = require('fs');
const colors = require('colors');

let todolist = [];

const create = description => {
    getDB();
    let todo = {
        description,
        completed: false
    };
    todolist.push(todo);
    saveData();
    return todo;
}

const saveData = () => {
    let data = JSON.stringify(todolist);
    fs.writeFile('db/data.json', data, err => {
        if(err) throw new Error('Could not create the file.', err);
    });
}

const getDB = () => {
    try {
        todolist = require('../db/data.json');
    } catch (error) {
        todolist = []
    }
}

const getList = () => {
    getDB();
    return todolist;
}

const deleted = description => {
    getDB();
    let index = todolist.findIndex( item => {
        return item.description === description
    });
    if(index >= 0) {
        todolist.pop(index);
        saveData();
        return true;
    }else {
        return false;
    }
}

const update = (description, completed=true) => {
    getDB();
    let index = todolist.findIndex( task => {
        return task.description === description;
    });
    if(index >= 0) {
        todolist[index].completed = completed;
        saveData();
        return true;
    }else {
        return false;
    }
}

module.exports = { create, getList, update, deleted }