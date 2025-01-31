import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index'

function Nanda() {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      {/* <Login /> */}
    </div>
  )
}

export default Nanda