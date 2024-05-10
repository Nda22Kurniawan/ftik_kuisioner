import React from 'react'
import { CiFaceSmile } from "react-icons/ci";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const hasil = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Hasil Kuisioner</strong>
          </CCardHeader>
          <CCardBody className='d-flex flex-column align-items-center p-5'>
              <CiFaceSmile style={{ width: '64px', height: '64px' }} />
            <div style={{ fontSize: '24px' }} className='text-center'>
              {/* <DocsExample href="forms/input-group#sizing"> */}
              <strong>Terima Kasih telah mengisi Kuisioner</strong>
            </div>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default hasil