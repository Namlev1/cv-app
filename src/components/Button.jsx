import '../styles/Button.css'

function Button({ onClick, text, isDisabled = false }) {
  return (<button className="big-btn shadow" onClick={onClick} disabled={isDisabled}>{text}</button>)

}

export default Button