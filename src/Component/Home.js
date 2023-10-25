import React, { useState } from 'react'
import { AddToDo } from './AddToDo'
import { DisplayTodo } from './DisplayTodo'
import _ from 'lodash'
function Home() {
    const [todo, setTodo] = useState("")
    const [listTodo, setListTodo] = useState([
        {
            id: 'todo1',
            name: 'learn React'
        },
        {
            id: 'todo2',
            name: 'do some project'
        },
        {
            id: 'todo3',
            name: 'learn nodejs'
        }
    ])
    const handleSubmit = () => {
        if (!todo) {
            alert("You can't leave todo empty")
        }
        const todoId = randomIntFromInterval(4, 99)
        let todoItem = {
            id: todoId,
            name: todo
        }
        let currentHome = _.clone(listTodo)
        currentHome.push(todoItem)
        setListTodo(currentHome)
    }
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const handleDeleteTodo = (id) => {
        let currentHome = _.clone(listTodo)
        currentHome = currentHome.filter(item => item.id !== id)
        setListTodo(currentHome)
    }
    return (
        <div>
            <AddToDo todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
            <DisplayTodo listTodo={listTodo} handleDeleteTodo={handleDeleteTodo} />

        </div>
    )
}
export default Home