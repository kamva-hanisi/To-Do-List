import React, { useState } from "react"

function ToDoList() {
    const [Place, setPlace] = useState([])
    const [newTube, setTube] = useState("")

    function handleInputChange(event) {
        setTube(event.target.value)
    }

    function addPlace() {

    }

    function removePlace(index) {

    }

    function movePlaceUp(index) {

    }

    function movePlaceDown(index) {

    }

    return(
        <div className="To-Do-List">
            <h1>To-Do-List</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a new place..."
                    value={newTube}
                    onChange={handleInputChange}
                />
                <button onClick={addPlace}>Add Place</button>
            </div>
        </div>
    )
}
export default ToDoList