import React, { useState } from "react"

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")

    function handleInputChange(event) {
    }

    function addTask() {
    }

    function removeTask(index) {
    }

    function moveTaskUp(index) {
    }

    function moveTaskDown(index) {
    }

    return(
        <div className="To-Do-List">
            <h1>To-Do-List</h1>
        </div>
    )
}
export default ToDoList