import { createContext, useState } from 'react'

export const EditModeContext = createContext(undefined)

export const EditModeProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(true)

  return (<EditModeContext.Provider value={{ isEditMode, setIsEditMode }}>
      {children}
    </EditModeContext.Provider>)
}
