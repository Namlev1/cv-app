import { useContext, useState } from 'react'
import '../styles/ProjectList.css'
import { EditModeContext } from '../context/EditModeContext'

function ProjectList() {
  const [elements, setElements] = useState([])
  const { isEditMode } = useContext(EditModeContext)

  const addElement = () => {
    setElements([...elements, ''])
  }

  const adjustHeight = (e) => {
    const textarea = e.target
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  return (<div className={'projects'}>
    <h2>Projects</h2>
    <ul>
      {elements.map((item, index) => (<li key={index}>
        <div className="project">
          <input type="text" className={'proj-name'} placeholder={'Enter name...'} disabled={!isEditMode} />
          <textarea className={'project-desc'} onChange={adjustHeight} placeholder={'Enter description...'}
                    disabled={!isEditMode}></textarea>
        </div>
      </li>))}
      {isEditMode && <li className={'add-btn'}>
        <button onClick={addElement}>Add new element</button>
      </li>}

    </ul>
  </div>)

}

export default ProjectList