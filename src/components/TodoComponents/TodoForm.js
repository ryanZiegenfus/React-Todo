import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super();
    }


    render() {
        return(
            <form onSubmit={this.props.submitFunc}>
                <div>{console.log(this.props)}</div>
                <input type="text" name="task" placeholder=" New Todo Item" onChange={this.props.changeFunc} value={this.props.value}/>
                <button type="submit" name="submitItem">Submit</button>
                <button type="button" name="removeItem" onClick={this.props.extermaFunc}>Remove Completed Items</button>
            </form>
        )
    }
}

export default TodoForm