import Button from './Button.jsx'
import '../styles/ButtonList.css'
import { EditModeContext } from '../context/EditModeContext.jsx'
import { useContext } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

function ButtonList() {
  const { isEditMode, setIsEditMode } = useContext(EditModeContext)
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const handleGeneratePdf = async () => {
    const input = document.querySelector('.doc')
    try {
      const canvas = await html2canvas(input)
      const imgData = canvas.toDataURL('image/png')

      const pdf = new jsPDF({
        orientation: 'portrait', unit: 'px', format: 'a4'
      })
      const width = pdf.internal.pageSize.getWidth()
      const height = (canvas.height * width) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, width, height)
      pdf.save('CV.pdf')
    } catch (error) {
      console.log(error)
    }
  }

  return (<div className={'flex-row btn-list'}>
    <Button text={'Edit'} isDisabled={isEditMode} onClick={toggleEditMode} />
    <Button text={'Submit'} isDisabled={!isEditMode} onClick={toggleEditMode} />
    <div className="grow"></div>
    <Button text={'Download'} isDisabled={isEditMode} onClick={handleGeneratePdf} />
  </div>)

}

export default ButtonList
