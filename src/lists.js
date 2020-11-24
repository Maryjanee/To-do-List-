export default class List {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addToLists(allLists) {
    allLists.push(this);
  }

  assignToDos(todos) {
    this.todos.push(todos);
  }

  deleteList(allLists) {
    let list = allLists.find(e => e.name == this.name)
    let index = allLists.indexOf(list);
    if (index > -1) {
      allLists.splice(index, 1);
    }
  }
}

