import { useContext, useState } from 'react'
import '../styles/List.css'
import {EditModeContext} from '../context/EditModeContext'

function List({ header }) {
  const {isEditMode} = useContext(EditModeContext)
  const [elements, setElements] = useState([])
  const addElement = () => {
    setElements([...elements, ''])
  }
  return (<div>
      <h2>{header}</h2>
      <ul>
        {elements.map((item, index) => (<li key={index}>
            <input type={'text'} disabled={!isEditMode}/>
          </li>))}
        {isEditMode && <li className={'add-btn'}>
          <button onClick={addElement}>Add new element</button>
        </li>}
      </ul>
    </div>)

}

export default List