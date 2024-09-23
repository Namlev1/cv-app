import '../styles/App.css'
import ButtonList from './ButtonList.jsx'
import Document from './Document.jsx'
import { EditModeProvider } from '../context/EditModeContext.jsx'

function App() {
  return (<>
    <EditModeProvider>
      <ButtonList />
      <Document />
    </EditModeProvider>
  </>)
}

export default App
