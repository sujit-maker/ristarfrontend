import React from 'react';
import SidebarWithHeader from '../components/Sidebar';
import AddressBookPage from './AddressBook';

export default function Customers() {
  return (
    <div className="flex h-screen">
    <SidebarWithHeader />
    <main className="flex-1 p-4">
      <AddressBookPage />
    </main>
  </div>
  );
}