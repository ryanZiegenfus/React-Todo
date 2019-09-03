import React from 'react';
import "./Todo.css"

class Todo extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props) {
      super(props);
      this.state = {
         task: props.value.task,
         id: props.value.id,
         completed: props.value.completed
      }
    }
    render() {
        return (
            <div onClick={() => this.props.func(this.state.id)} className={this.props.value.completed === true ? "strikeThrough" : ""}>
                {this.state.task}
            </div>
        );
    }
  }
  
  export default Todo;