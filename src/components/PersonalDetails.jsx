import { useState } from "react"
import '../styles/PersonalDetails.css'

function PersonalDetails ( {toSetData, data}) {
    const [editIsClicked, setEditIsClicked] = useState(false);

    const handleEditClick = () => {
        setEditIsClicked(true)
    }
    
    const handleSubmitClick = (e) => {
        e.preventDefault()
        setEditIsClicked(false)
        const fullName = document.querySelector(".personal-details > form > #name").value;
        const email = document.querySelector(".personal-details > form > #email").value;
        const phone = document.querySelector(".personal-details > form > #phone").value;
        const address = document.querySelector(".personal-details > form > #address").value;
        toSetData({fullName: `${fullName}`,
                    email: `${email}`, 
                    phone: `${phone}`,
                    address: `${address}`
                });
    }

    if(!editIsClicked) {
        return (
            <div className="personal-details">
                <h2>Personal details</h2>
                <button onClick={handleEditClick}>edit</button>
            </div>
        )
    } else {
        return (
            <div className="personal-details">
                <h2>Personal details</h2>
                <form >
                    <label htmlFor="name">Full name</label>
                    <input type="text" id="name" placeholder="Enter full name" defaultValue={data.fullName}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" defaultValue={data.email}/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter phone number" defaultValue={data.phone}/>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="City, Country" defaultValue={data.address}/>
                    <button type="submit" onClick={handleSubmitClick}>Submit</button>
                </form>
            </div>
        )
    }
}

export default PersonalDetails