import React from 'react'
import { Link } from 'react-router-dom';
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

const kuisionerReguler = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Kuisioner</strong>
                    </CCardHeader>
                    <CCardBody >
                        <CCardBody>
                            <p>Kuisioner 1</p>
                            <CCol className=" d-flex justify-content-around">
                                <CFormCheck inline type="radio" name="options1" id="inlineCheckbox1" value="option1" label="1" />
                                <CFormCheck inline type="radio" name="options1" id="inlineCheckbox2" value="option2" label="2" />
                                <CFormCheck inline type="radio" name="options1" id="inlineCheckbox3" value="option3" label="3" />
                                <CFormCheck inline type="radio" name="options1" id="inlineCheckbox4" value="option4" label="4" />
                                <CFormCheck inline type="radio" name="options1" id="inlineCheckbox5" value="option5" label="5" />
                            </CCol>
                        </CCardBody>
                        <CCardBody>
                            <p>Kuisioner 2</p>
                            <CCol className=" d-flex justify-content-around">
                                <CFormCheck inline type="radio" name="options2" id="inlineCheckbox6" value="option1" label="1" />
                                <CFormCheck inline type="radio" name="options2" id="inlineCheckbox7" value="option2" label="2" />
                                <CFormCheck inline type="radio" name="options2" id="inlineCheckbox8" value="option3" label="3" />
                                <CFormCheck inline type="radio" name="options2" id="inlineCheckbox9" value="option4" label="4" />
                                <CFormCheck inline type="radio" name="options2" id="inlineCheckbox10" value="option5" label="5" />
                            </CCol>
                        </CCardBody>
                        <CCardBody>
                            <p>Kuisioner 3</p>
                            <CCol className=" d-flex justify-content-around">
                                <CFormCheck inline type="radio" name="options3" id="inlineCheckbox1" value="option1" label="1" />
                                <CFormCheck inline type="radio" name="options3" id="inlineCheckbox2" value="option2" label="2" />
                                <CFormCheck inline type="radio" name="options3" id="inlineCheckbox3" value="option3" label="3" />
                                <CFormCheck inline type="radio" name="options3" id="inlineCheckbox4" value="option4" label="4" />
                                <CFormCheck inline type="radio" name="options3" id="inlineCheckbox5" value="option5" label="5" />
                            </CCol>
                        </CCardBody>
                        <CCardBody>
                            <p>Kuisioner 4</p>
                            <CCol className=" d-flex justify-content-around">
                                <CFormCheck inline type="radio" name="options4" id="inlineCheckbox1" value="option1" label="1" />
                                <CFormCheck inline type="radio" name="options4" id="inlineCheckbox2" value="option2" label="2" />
                                <CFormCheck inline type="radio" name="options4" id="inlineCheckbox3" value="option3" label="3" />
                                <CFormCheck inline type="radio" name="options4" id="inlineCheckbox4" value="option4" label="4" />
                                <CFormCheck inline type="radio" name="options4" id="inlineCheckbox5" value="option5" label="5" />
                            </CCol>
                        </CCardBody>
                        <CCardBody>
                            <p>Kuisioner 5</p>
                            <CCol className=" d-flex justify-content-around">
                                <CFormCheck inline type="radio" name="options5" id="inlineCheckbox1" value="option1" label="1" />
                                <CFormCheck inline type="radio" name="options5" id="inlineCheckbox2" value="option2" label="2" />
                                <CFormCheck inline type="radio" name="options5" id="inlineCheckbox3" value="option3" label="3" />
                                <CFormCheck inline type="radio" name="options5" id="inlineCheckbox4" value="option4" label="4" />
                                <CFormCheck inline type="radio" name="options5" id="inlineCheckbox5" value="option5" label="5" />
                            </CCol>
                        </CCardBody>
                    </CCardBody>
                </CCard>
                <div className="d-grid gap-2 justify-content-end ">
                    <Link to='/base/accordion/kuisioner/hasil/hasilKuisioner' className="text-decoration-none">
                        <CButton color="success">Next</CButton>
                    </Link>
                </div>
            </CCol>
        </CRow>
    )
}

export default kuisionerReguler