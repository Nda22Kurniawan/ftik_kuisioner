import React from 'react';
import { Link } from 'react-router-dom';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormCheck,
    CRow,
} from '@coreui/react';

const form = () => {

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>TAMBAH KUISIONER</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CFormInput
                                type="text"
                                id="exampleFormControlInput1"
                                label="Kuisioner"
                                placeholder="Kuisioner"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CForm>
                    </CCardBody>
                </CCard>
                <div className="d-grid gap-2 justify-content-end ">
                    <Link to='/dosen/hasil/hasilKuisioner' className="text-decoration-none">
                        <CButton color="success">Tambah</CButton>
                    </Link>
                </div>
            </CCol>
        </CRow>
    );
};

export default form;
