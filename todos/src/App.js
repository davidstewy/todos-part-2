import React, { Component } from "react";
import "./App.css";
import todoList from "./todos.json";

const ToDoItem = props => (
  <li className={props.completed ? "completed" : ""}>
    <div className="view">
      <input
        className="toggle"
        onClick={props.onClick}
        type="checkbox"
        checked={props.completed}
      />
      <label>{props.title}</label>
      <button className="destroy" onClick={props.deleteTodo} />
    </div>
  </li>
);

class ToDoList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     todos: todoList,
  //   }
  // this.handleKeypress = this.handleKeypress.bind(this)
  // }
  state = {
    todos: todoList,
    todoCount: 6
  };

  handleKeypress = event => {
    if (event.key === "Enter") {
      const title = event.target.value;
      event.target.value = "";
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

  handleCompleted = id => event => {
    //   search thru this.state.todos List
    const { todos } = this.state;

    this.setState({
      todos: todos.map(
        todo =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      )
    });
  };

  handleDeleteTodo = id => event => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        if (todo.id === id) {
          return false;
        } else {
          return true;
        }
      })
    });
  };

  handleDeletingAllTodos = event => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        if (todo.completed === true) {
          return false;
        } else {
          return true;
        }
      })
    });
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
              <ToDoItem
                completed={todo.completed}
                onClick={this.handleCompleted(todo.id)}
                title={todo.title}
                deleteTodo={this.handleDeleteTodo(todo.id)}
              />
            ))}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed" onClick={this.handleDeletingAllTodos}>Clear completed</button>
        </footer>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <ToDoList handleCompleted={this.handleCompleted} />
      </section>
    );
  }
}

export default App;
