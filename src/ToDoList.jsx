import React, { useState } from "react"

export const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [newTask, setTask] = useState("");

    const handleChange = (event) => {
        
    }

    const addTask = () => {
        setTodos([...todos, newTask])
        setTask("")
    }
  return (
    <div>ToDoList</div>
  )
}
