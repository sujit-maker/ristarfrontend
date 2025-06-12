import React from 'react'
import SidebarWithHeader from '../components/Sidebar'

<<<<<<< HEAD
const dashboard = () => {
  return (
    <>
   
    <SidebarWithHeader/> 
    </>
  )
}

export default dashboard
=======
const DashboardPage = () => {
  return (
    <SidebarWithHeader>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-white mb-4">Dashboard Overview</h2>
        <p className="text-gray-300">Welcome to your dashboard!.</p>
      </div>
    </SidebarWithHeader>
  )
}

export default DashboardPage
>>>>>>> ed2eabf12fea1248d073602353a6ce0e176486f9
