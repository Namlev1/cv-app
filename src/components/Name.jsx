import '../styles/Name.css'
import {EditModeContext} from '../context/EditModeContext'
import { useContext } from 'react'

function Name({isDisabled}){
  const {isEditMode} = useContext(EditModeContext)
  return (
    <input type="text" className={'name'} disabled={isDisabled} placeholder={isEditMode ? 'Your name' : ''}/>
  )

}

export default Name