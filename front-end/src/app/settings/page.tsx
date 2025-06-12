import React from 'react';
import SidebarWithHeader from '../components/Sidebar';

const SettingsPage = () => {
  return (
    <SidebarWithHeader>
      <div>
        <h2 className="text-2xl font-bold mb-4">Settings Content</h2>
        <p>This is the content for the Settings section.</p>
      </div>
    </SidebarWithHeader>
  );
};

export default SettingsPage; 