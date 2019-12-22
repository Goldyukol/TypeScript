import React from 'react';
import axios from 'axios'

interface IState {
    todos: any
}

class Todos extends React.Component<{}, IState> {

    state = {
        todos: ''
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/todo-lists', { withCredentials: true })
            .then(res => {
                alert(res.data)
            })
    }
    render() {
        return (
            <div>{this.state.todos}
            </div>
        )
    }
}

export default Todos;