import '../styles/Education.css'
import { useState } from 'react'

function Education() {
  const [elements, setElements] = useState([])

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

  return (<div className={'education'}>
      <h2>Education</h2>
      <ul>
        {elements.map((item, index) => (<li key={index}>
          <div className="edu-element">
            <input type="text" className={'edu-time'} placeholder={'Enter time...'} />
            <textarea className={'edu-uni'} onChange={adjustHeight} placeholder={'Enter university name...'}></textarea>
            <textarea className={'edu-diploma'} onChange={adjustHeight} placeholder={'Enter course name'}></textarea>
          </div>
        </li>))}
        <li className={'add-btn'}>
          <button onClick={addElement}>Add new element</button>
        </li>

      </ul>
    </div>)
}

export default Education