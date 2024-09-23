import '../styles/Contact.css'

function Contact() {
  return (
    <div id="contact" className={'flex-col'}>
      <label htmlFor="city">City</label>
      <input type="text" id={'city'} />
      <label htmlFor="email">Email</label>
      <input type="text" id={'email'} />
      <label htmlFor="phone">Phone</label>
      <input type="text" id={'phone'} />
      <label htmlFor="github">Github</label>
      <input type="text" id={'github'} />
    </div>
  )
}

export default Contact;