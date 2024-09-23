import '../styles/Description.css'
import { useContext, useEffect, useRef, useState } from 'react'
import {EditModeContext} from "../context/EditModeContext"

function Description() {
  const {isEditMode} = useContext(EditModeContext)

  const [text, setText] = useState('')
  const textareaRef = useRef(null)

  const handleInput = (event) => {
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

  return (<textarea
    ref={textareaRef}
    value={text}
    onChange={handleInput}
    placeholder={isEditMode ? "Enter a description..." : ''}
    disabled={!isEditMode}
  />)
}

export default Description