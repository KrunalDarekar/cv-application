import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import EducationDetails from './components/EducationDetails'

function App() {
  const [personalData,setPersonalData] = useState({fullName: "", email: "", phone: "", address: ""})
  return (
    <>
      <div className='input-fields'>
        <PersonalDetails toSetData={setPersonalData} data={personalData}/>
        <EducationDetails/>
      </div>
      <div className='output'>
        <div className='full-name'>
          {personalData.fullName}
          {personalData.email}
          {personalData.phone}
          {personalData.address}
        </div>
      </div>
    </>
  )
}

export default App
