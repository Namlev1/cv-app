import Description from './Description.jsx'
import Contact from './Contact.jsx'
import List from './List.jsx'
import Education from './Education.jsx'
import ProjectList from './ProjectList.jsx'
import Name from './Name.jsx'
import '../styles/Document.css'
import {EditModeContext} from '../context/EditModeContext.jsx'
import { useContext } from 'react'

function Document() {
  const {isEditMode} = useContext(EditModeContext)
  return (<div className={`doc grow ${isEditMode ? 'edit-mode' : ''}`}>
    <Name isDisabled={!isEditMode}/>
    <div className={'flex-col doc-col'}>
      <Description/>
      <Contact />
      <List header={'Tech-stack'}/>
      <List header={'Skills'}/>
    </div>
    <div className={'flex-col doc-col'}>
      <Education />
      <ProjectList />
      <List header={'Languages'}/>
      <List header={'Hobby'}/>
    </div>
  </div>)
}

export default Document