import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import todoList from "./todos.json";

const ToDoItem = props => (
  <li className={props.completed ? "completed" : ""}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={props.completed} />
      <label>{props.item}</label>
      <button className="destroy" />
    </div>
  </li>
);

class ToDoList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     todos: todoList,
  //   }
  // }
  state = {
    todos: todoList,
    todoCount: 6
  };

  handleKeypress = event => {
    if (event.key === "Enter") {
      const title = event.target.value;
      event.target.value = '';
      let newTodo = {
        userId: 1,
        id: this.state.todoCount,
        title: title,
        completed: false
      };
      const newTodoList = this.state.todos.slice();
      newTodoList.push(newTodo);
      this.setState({
        todos: newTodoList,
        todoCount: this.state.todoCount + 1
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyPress={this.handleKeypress}
            autoFocus
          />
        </header>
        <section className="main">
          <ul className="todo-list">
            {this.state.todos.map(todo => (
              <ToDoItem completed={todo.completed} item={todo.title} />
            ))}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <ToDoList />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;



