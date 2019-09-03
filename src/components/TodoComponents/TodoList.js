import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    constructor(props) {
        super();
        this.state = props.value
    }

    render () {
        return (
            <div>
                {console.log(this.props.value.testArray)}
                {this.props.value.testArray.map(element => <Todo key={element.id} value={element} func={this.props.func}/>)}
            </div>
        )
    }
}

export default TodoList;