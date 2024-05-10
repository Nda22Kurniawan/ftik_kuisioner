import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CCardImage,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFormCheck,
    CFormFloating,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CContainer,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import avatar8 from './../../assets/images/avatars/8.jpg'

const profile = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Profile</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CContainer>
                            <CRow>
                                <CCol className='justify-content-center align-items-center d-grid' sm={4}>
                                    <CCardImage style={{ borderRadius: '50%', width: '180px', height: '180px' }} src={avatar8} />
                                    {/* <CButton color="secondary" size="md" className='mt-2'>Ganti Profil</CButton> */}
                                </CCol>
                                <CCol sm={8} className='mt-3'>
                                    <CRow className="mb-3">
                                        <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Nama</CFormLabel>
                                        <CCol sm={10}>
                                            <CFormInput type="text" id="staticEmail" defaultValue="Nanda Dwi Kurniawan" readOnly plainText />
                                        </CCol>
                                    </CRow>
                                    <CRow className="mb-3">
                                        <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">NIM</CFormLabel>
                                        <CCol sm={10}>
                                            <CFormInput type="text" id="staticNIM" defaultValue="G.111.22.0060" readOnly plainText />
                                        </CCol>
                                    </CRow>
                                    <CRow className="mb-3">
                                        <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Prodi / Semester</CFormLabel>
                                        <CCol sm={10}>
                                            <CFormInput type="text" id="staticProdi" defaultValue="Sistem Informasi / 4" readOnly plainText />
                                        </CCol>
                                    </CRow>
                                    <CRow className="mb-3">
                                        <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</CFormLabel>
                                        <CCol sm={10}>
                                            <CFormInput type="password" id="inputPassword" defaultValue="nanda0107" disabled/>
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                            {/* <CRow>
                                <CCol sm>col-sm</CCol>
                                <CCol sm>col-sm</CCol>
                                <CCol sm>col-sm</CCol>
                            </CRow> */}
                        </CContainer>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default profile