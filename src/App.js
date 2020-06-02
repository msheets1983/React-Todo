import React from 'react'
import TodoList from "./components/TodoList"
import TodoForm from './components/TodoForm'
import "./components/Todo.css"

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todoList: list
    };
  }

  toggleItem = clickedId => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === clickedId){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item
      }
    });
    this.setState({
      todoList: newTodoList
    })
  }

  addNewItem = (itemText) => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  removeTodo = () => {
    const newToDo = this.state.todoList.filter( item => 
      item.completed < 1
    )
    this.setState({
      todoList: newToDo
    })
  }

  render() {
    return (
      <div className='App'> 
      <div className="header">
        <h1>Michael's To-Do List!</h1>
        <TodoForm addNewItem={this.addNewItem} />
        </div>

        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
