import { useState } from 'react'
import '../styles/List.css'

function List({ header }) {
  const [elements, setElements] = useState([])
  const addElement = () => {
    setElements([...elements, ''])
  }
  return (<div>
      <h2>{header}</h2>
      <ul>
        {elements.map((item, index) => (<li key={index}>
            <input type={'text'} />
          </li>))}
        <li className={'add-btn'}>
          <button onClick={addElement}>Add new element</button>
        </li>
      </ul>
    </div>)

}

export default List