import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const testArray = [
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
  constructor() {
    super();
    this.state = {
      testArray: testArray,
      task: ""
    };
    this.completedFunction=this.completedFunction.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleExterminate=this.handleExterminate.bind(this);
    console.log(this);
  }

  completedFunction(id) {
    this.setState({
      testArray: this.state.testArray.map( element => element.id === id? {...element, completed: !element.completed} : element)
    })
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state)

  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(event)
    let newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({testArray: [...this.state.testArray, newTask]})
  }

  handleExterminate (event) {
    event.preventDefault();
    this.setState({testArray: this.state.testArray.filter(element => element.completed === false)})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList value={this.state} func={this.completedFunction}/>
        <TodoForm changeFunc={this.handleChange} submitFunc={this.handleSubmit} value={this.state.task} extermaFunc={this.handleExterminate}/>
      </div>
    );
  }
}

export default App;
