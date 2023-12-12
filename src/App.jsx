import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'
import EducationDetails from './components/EducationDetails'

function App() {
  const [personalData,setPersonalData] = useState({fullName: "", email: "", phone: "", address: ""})
  const [educationalData, setEducationalData] = useState([]);
  return (
    <>
      <div className='input-fields'>
        <PersonalDetails toSetData={setPersonalData} data={personalData}/>
        <EducationDetails toSetData={setEducationalData} data={educationalData}/>
      </div>
      <div className='output'>
        <div className='full-name'>
          {personalData.fullName}
          {personalData.email}
          {personalData.phone}
          {personalData.address}
        </div>
        <div className="education-opt">
          {educationalData.map(e => {
            <div key={e.id}>{e.degree} from {e.school}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
