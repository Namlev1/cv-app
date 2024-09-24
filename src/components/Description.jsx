import '../styles/Description.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { EditModeContext } from '../context/EditModeContext'

function Description() {
  const { isEditMode } = useContext(EditModeContext)

  const [text, setText] = useState(
    'I am a 2nd year Applied Computer Science student with a clear ambition to become a Java Backend Spring Boot Developer. \n' +
      'I would like to gain my first experience in the IT industry ensuring a balanced commitment to both studies and a future in software development. \n' +
      'With a passion for taking on new challanges, my aim is to contribute as an instrumental and supportive memeber of your company. '
  )
  const textareaRef = useRef(null)

  const handleInput = event => {
    setText(event.target.value)
    adjustHeight()
  }

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  useEffect(() => {
    adjustHeight()
  }, [text])

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={handleInput}
      placeholder={isEditMode ? 'Enter a description...' : ''}
      disabled={!isEditMode}
    />
  )
}

export default Description
