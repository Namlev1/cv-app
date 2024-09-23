import Button from './Button.jsx'
import '../styles/ButtonList.css'
import {EditModeContext} from '../context/EditModeContext.jsx'
import { useContext } from 'react'

function ButtonList() {
  const {isEditMode, setIsEditMode} = useContext(EditModeContext)
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (<div className={'flex-row btn-list'}>
    <Button text={'Edit'} isDisabled={isEditMode} onClick={toggleEditMode} />
    <Button text={'Submit'} isDisabled={!isEditMode} onClick={toggleEditMode} />
    <div className="grow" ></div>
    <Button text={'Download'} />
  </div>)

}

export default ButtonList
