import React, { useContext } from 'react'
import { Toast } from 'primereact/toast'
import SanQuintaContext from '../providers/context'
import LecturaForm from '../components/LecturaForm.jsx'
function LecturaFormContainer() {
  const {toast} = useContext(SanQuintaContext);
  return (
    <>
      <Toast ref={toast} />
      <LecturaForm />
    </>
  )
}

export default LecturaFormContainer
