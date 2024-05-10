import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow, CCardImage } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import avatar8 from '../../../assets/images/ftik-white.png';

const Login = () => {
  
  const navigate = useNavigate();
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Lakukan validasi login di sini
    // Misalnya, periksa apakah nim dan password sesuai dengan kredensial yang tersimpan
    if ((nim === 'admin' && password === 'admin') || // Ganti dengan logika validasi Anda
        (nim === 'mahasiswa' && password === 'mahasiswa') ||
        (nim === 'dosen' && password === 'dosen') ||
        (nim === 'tendik' && password === 'tendik')) {
      // Jika login berhasil, arahkan pengguna ke DefaultLayout
      navigate('/layout');
    } else {
      // Jika login gagal, beri tahu pengguna (misalnya, dengan menampilkan pesan kesalahan)
      setError('Login gagal. Mohon cek NIM dan password Anda.');
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4" style={{ backgroundColor: '#FD4815' }}>
                <CCardBody>
                  <CForm className="text-center text-white">
                    <h2>FTIK USM</h2>
                    <CCardImage className="mt-4" style={{ width: '290px', height: '140px' }} src={avatar8} />
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="NIM"
                        autoComplete="username"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          style={{ backgroundColor: '#FD4815' }}
                          className="px-4 text-white"
                          onClick={handleLogin}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
