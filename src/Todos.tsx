import React from 'react';
import axios from 'axios'



interface ITodo {
    id: string
    title: string
    addedDate: string
    order: number
}

interface IState {
    todos: ITodo[]
}
class Todos extends React.Component<{}, IState> {

    state: IState = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/todo-lists', { withCredentials: true })
            .then(res => {
                console.log(res.data)
                this.setState({
                    todos: res.data
                })
            })
    }
    render() {
        return (
            <div>{this.state.todos.map((el: ITodo) => { return <div>{el.id}, {el.title}, {el.order}, {el.addedDate}</div> })}</div>
        )
    }
}

export default Todos;