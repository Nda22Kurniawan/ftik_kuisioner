import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react';
import { getStyle } from '@coreui/utils';
import { CChartBar, CChartLine } from '@coreui/react-chartjs';
import CIcon from '@coreui/icons-react';
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons';

const WidgetsDropdown = ({ className }) => {
  const widgetChartRef1 = useRef(null);
  const widgetChartRef2 = useRef(null);

  const identity = [{ nama: 'Nanda Dwi Kurniawan', nim: 'G.111.22.0060', prodi: 'Sistem Informasi', semester: 6 }];

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary');
          widgetChartRef1.current.update();
        });
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info');
          widgetChartRef2.current.update();
        });
      }
    });
  }, [widgetChartRef1, widgetChartRef2]);

  return (
    <CRow className={className} xs={{ gutter: 4 }}>
      {identity.map((item, index) => (
        <React.Fragment key={index}>
          <CCol sm={8} xl={3} xxl={3}>
            <CWidgetStatsA
              // color="primary"
              className='pb-2'
              style={{ backgroundColor: '#ff7400' }}
              title="Nama"
              value={item.nama}
            />
          </CCol>
          <CCol sm={6} xl={4} xxl={3}>
            <CWidgetStatsA
              // color="info"
              className='pb-2'
              style={{ backgroundColor: '#ff7400' }}
              title="NIM"
              value={item.nim}
            />
          </CCol>
          <CCol sm={6} xl={4} xxl={3}>
            <CWidgetStatsA
              // color="warning"
              className='pb-2'
              style={{ backgroundColor: '#ff7400' }}
              title="Program Studi"
              value={item.prodi}
            />
          </CCol>
          <CCol sm={6} xl={4} xxl={3}>
            <CWidgetStatsA
              title="Semester"
              // color="danger"
              className='pb-2'
              style={{ backgroundColor: '#ff7400' }}
              value={item.semester}
            />
          </CCol>
        </React.Fragment>
      ))}
    </CRow>
  );
};

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
};

export default WidgetsDropdown;
