// VMTS.js

import React from 'react';
import { Link } from 'react-router-dom';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormCheck,
    CRow,
} from '@coreui/react';

const VMTS = () => {

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>PILIH KUISIONER</strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className="d-grid gap-2">
                            <div className="d-grid gap-2 justify-content-end ">
                                <Link to='/admin/form/form' className="text-decoration-none">
                                    <CButton color="primary">VMTS</CButton>
                                </Link>
                            </div>
                            <CButton color="primary">Layanan Manajemen</CButton>
                            <CButton color="primary">Pengelolaan SDM</CButton>
                            <CButton color="primary">Keuangan</CButton>
                        </div>
                    </CCardBody>
                </CCard>
                {/* <div className="d-grid gap-2 justify-content-end ">
                    <Link to='/dosen/hasil/hasilKuisioner' className="text-decoration-none">
                        <CButton color="success">Next</CButton>
                    </Link>
                </div> */}
            </CCol>
        </CRow>
    );
};

export default VMTS;
