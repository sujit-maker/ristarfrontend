import React from 'react'
import SidebarWithHeader from '../components/Sidebar'

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