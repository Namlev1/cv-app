import Description from './Description.jsx'
import Contact from './Contact.jsx'
import List from './List.jsx'
import Education from './Education.jsx'
import ProjectList from './ProjectList.jsx'
import Name from './Name.jsx'
import '../styles/Document.css'

function Document({isEditMode}) {
  return (<div className={`doc grow ${isEditMode ? 'edit-mode' : ''}`}>
    <div className={'flex-col doc-col'}>
      <Name isDisabled={!isEditMode}/>
      <Description></Description>
      <Contact />
      <List />
      <List />
    </div>
    <div className={'flex-col doc-col'}>
      <Education />
      <ProjectList />
      <List />
      <List />
    </div>
  </div>)
}

export default Document