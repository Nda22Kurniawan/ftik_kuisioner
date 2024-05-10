// VMTS.js

import React from 'react';
import { Link } from 'react-router-dom';
import kuisionerData from '../../../kuisioner/kuisionerTendik'; // Import data kuisioner
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CRow,
} from '@coreui/react';

const sdm = () => {
  const { sdm } = kuisionerData;

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>SURVEI HASIL SOSIALISASI VMTS PRODI SISTEM INFORMASI</strong>
          </CCardHeader>
          <CCardBody>
            {sdm.map((item, index) => (
              <CCardBody key={item.id}>
                <p>{item.question}</p>
                <CCol className="d-flex justify-content-around">
                  {item.options.map((option, idx) => (
                    <CFormCheck
                      key={idx}
                      inline
                      type="radio"
                      name={`options${item.id}`}
                      id={`inlineCheckbox${idx + 1}`}
                      value={`option${idx + 1}`}
                      label={option}
                    />
                  ))}
                </CCol>
              </CCardBody>
            ))}
          </CCardBody>
        </CCard>
        <div className="d-grid gap-2 justify-content-end ">
          <Link to='/tendik/hasil/hasilKuisioner' className="text-decoration-none">
            <CButton color="success">Next</CButton>
          </Link>
        </div>
      </CCol>
    </CRow>
  );
};

export default sdm;
