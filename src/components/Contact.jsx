import '../styles/Contact.css'
import {EditModeContext} from '../context/EditModeContext'
import { useContext } from 'react'

function Contact() {
  const {isEditMode} = useContext(EditModeContext)
  return (
    <div id="contact" className={'flex-col'}>
      <label htmlFor="city">City</label>
      <input type="text" id={'city'} placeholder={isEditMode ? 'Enter city name...' : ''} disabled={!isEditMode} defaultValue={'Warsaw'}/>
      <label htmlFor="email">Email</label>
      <input type="text" id={'email'} placeholder={isEditMode ? 'Enter email...' : ''} disabled={!isEditMode} defaultValue={'mail.email@gmail.com'}/>
      <label htmlFor="phone">Phone</label>
      <input type="tel" id={'phone'} placeholder={isEditMode ? 'Enter phone number...' : ''} disabled={!isEditMode} defaultValue={'342 123 101'}/>
      <label htmlFor="github">Github</label>
      <input type="text" id={'github'} placeholder={isEditMode ? 'Enter github url...' : ''} disabled={!isEditMode} defaultValue={'github.com/Namlev1'}/>
    </div>
  )
}

export default Contact;