import '../styles/Button.css'

function Button({ onClick, text, isDisabled = false }) {
  return (<button className="big-btn" onClick={onClick} disabled={isDisabled}>{text}</button>)

}

export default Button