import '../styles/Description.css'
import { useEffect, useRef, useState } from 'react'

function Description() {
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
    placeholder="Enter a description..."
  />)
}

export default Description