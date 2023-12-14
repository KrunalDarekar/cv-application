import { useState } from "react";
import { v1 as uuid } from "uuid";

function EducationDetails({toSetData, data}) {
    const [editIsClicked, setEditIsClicked] = useState(false);
    const [formIsVisible, setFormVisibility] = useState(false);

    const handleEditClick = () => {
        setEditIsClicked(true)
    }

    const handleAddClick = () => {
        setFormVisibility(true)
    }

    const handleSaveClick = (e) => {
        e.preventDefault()
        const newData = [...data]
        const school = document.querySelector(".educational-details > form > #school").value
        const degree = document.querySelector(".educational-details > form > #degree").value
        const startDate = document.querySelector(".educational-details > form > #start-date").value
        const endDate = document.querySelector(".educational-details > form > #end-date").value
        const location = document.querySelector(".educational-details > form > #location").value
        console.log(school)
        console.log(degree)
        console.log(startDate)
        console.log(endDate)
        console.log(location)
        newData.push({
            school: `${school}`,
            degree: `${degree}`,
            startDate: startDate,
            endDate: endDate,
            location: `${location}`,
            id: uuid()
        })
        toSetData(newData)
        setFormVisibility(false)
    }

    if(!editIsClicked){
        return (
            <div className="educational-details">
                <h2>Education</h2>
                <button onClick={handleEditClick}>edit</button>
            </div>
        )
    } else {
        if(!formIsVisible){
            return (
                <div className="educational-details">
                    <h2>Education</h2>
                    <div className="educational-list">
                        {data.map(element => {
                            return <div key={element.id}>{element.school}</div>
                        })}
                    </div>
                    <button onClick={handleAddClick}>Add Education</button>
                </div>
            )
        } else {
            return (
                <div className="educational-details">
                    <form>
                        <h2>Education</h2>
                        <label htmlFor="school">School</label>
                        <input type="text" placeholder="Enter school / university" id="school"/>
                        <label htmlFor="degree">Degree</label>
                        <input type="text" placeholder="Enter Degree" id="degree" />
                        <label htmlFor="start-date">Start date</label>
                        <input type="date" id="start-date" />
                        <label htmlFor="end-date">End date</label>
                        <input type="date" id="end-date" />
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder="Enter location" id="location"/>
                        <button type="submit" onClick={handleSaveClick}>Save</button>
                    </form>
                </div>
            )
        }
    }

}

export default EducationDetails