import '../styles/Contact.css'
import {EditModeContext} from '../context/EditModeContext'
import { useContext } from 'react'

function Contact() {
  const {isEditMode} = useContext(EditModeContext)
  return (
    <div id="contact" className={'flex-col'}>
      <label htmlFor="city">City</label>
      <input type="text" id={'city'} placeholder={isEditMode ? 'Enter city name...' : ''} disabled={!isEditMode}/>
      <label htmlFor="email">Email</label>
      <input type="text" id={'email'} placeholder={isEditMode ? 'Enter email...' : ''} disabled={!isEditMode}/>
      <label htmlFor="phone">Phone</label>
      <input type="tel" id={'phone'} placeholder={isEditMode ? 'Enter phone number...' : ''} disabled={!isEditMode}/>
      <label htmlFor="github">Github</label>
      <input type="text" id={'github'} placeholder={isEditMode ? 'Enter github url...' : ''} disabled={!isEditMode}/>
    </div>
  )
}

export default Contact;