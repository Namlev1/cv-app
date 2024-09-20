import '../styles/App.css'
import ButtonList from './ButtonList.jsx'
import Document from './Document.jsx'
import { useState } from 'react'

function App() {
  const [isEditMode, setIsEditMode] = useState(true)
  return (<>
    <ButtonList isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
    <Document isEditMode={isEditMode}/>
  </>)
}

export default App
