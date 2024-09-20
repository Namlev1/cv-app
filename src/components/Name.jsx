import '../styles/Name.css'

function Name({isDisabled}){
  return (
    <input type="text" className={'name'} disabled={isDisabled}/>
  )

}

export default Name