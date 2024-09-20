import Description from './Description.jsx'
import Contact from './Contact.jsx'
import List from './List.jsx'
import Education from './Education.jsx'
import ProjectList from './ProjectList.jsx'
import Name from './Name.jsx'

function Document() {
  return (<div>
    <div>
      <Name />
      <Description></Description>
      <Contact />
      <List />
      <List />
    </div>
    <div>
      <Education />
      <ProjectList />
      <List />
      <List />
    </div>
  </div>)
}

export default Document