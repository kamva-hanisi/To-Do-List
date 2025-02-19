import React, { useState } from "react"

function ToDoList() {
    const [Place, setPlace] = useState(["Jozi, South Africa", "Cape Town, South Africa", "Durban, South Africa", "Pretoria, South Africa", "Bloemfontein, South Africa"])
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
                <button className="add-button" onClick={addPlace}>Add Place</button>
                <ol>
                    {Place.map((place, index) => (
                        <li key={index}>
                            <span>{place}</span>
                            <button className="remove-btn" onClick={() => removePlace(index)}>Remove</button>
                            <button className="move-btn" onClick={() => movePlaceUp(index)}>Up</button>
                            <button className="move-btn" onClick={() => movePlaceDown(index)}>Down</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default ToDoList