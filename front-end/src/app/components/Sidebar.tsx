'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookUser,
  MapPin,
  Boxes,
  DollarSign,
  FileText,
  Package,
  History,
  Settings,
  Truck,
} from 'lucide-react';

// Function to return the title based on pathname
const getPageTitle = (pathname: string) => {
  const routes: { [key: string]: string } = {
    '/dashboard': 'Dashboard',
    '/address-book': 'Address Book',
    '/port-location': 'Port & Location',
    '/products-inventory': 'Products & Inventory',
    '/container-lease-tariff': 'Container Lease Tariff',
    '/cost-tariff': 'Cost Tariff',
    '/quotation': 'Quotation',
    '/shipments': 'Shipments',
    '/movements-history': 'Movements History',
    '/settings': 'Settings',
  };

  // Normalize the pathname (remove trailing slashes)
  const normalizedPath = pathname.replace(/\/$/, '');
  return routes[normalizedPath] || (normalizedPath === '' ? 'Dashboard' : 'AddressBook');
};

const SidebarWithHeader = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 shrink-0 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">RISTAR</h1>

          <nav className="flex flex-col gap-3">
            <SidebarLink href="/dashboard" icon={<LayoutDashboard size={16} />} label="Dashboard" pathname={pathname} />
            <SidebarLink href="/addressbook" icon={<BookUser size={16} />} label="Address Book" pathname={pathname} />
            <SidebarLink href="/port-location" icon={<MapPin size={16} />} label="Port & Location" pathname={pathname} />
            <SidebarLink href="/products-inventory" icon={<Boxes size={16} />} label="Products & Inventory" pathname={pathname} />
            <SidebarLink href="/container-lease-tariff" icon={<Package size={16} />} label="Container Lease Tariff" pathname={pathname} />
            <SidebarLink href="/cost-tariff" icon={<DollarSign size={16} />} label="Cost Tariff" pathname={pathname} />
            <SidebarLink href="/quotation" icon={<FileText size={16} />} label="Quotation" pathname={pathname} />
            <SidebarLink href="/shipments" icon={<Truck size={16} />} label="Shipments" pathname={pathname} />
            <SidebarLink href="/movements-history" icon={<History size={16} />} label="Movements History" pathname={pathname} />
            <SidebarLink href="/settings" icon={<Settings size={16} />} label="Settings" pathname={pathname} />
          </nav>
        </div>
        <div className="p-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyApp Inc.
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white px-4 py-4 shadow-md flex items-center justify-between min-h-[70px]">
          <h2 className="text-xl font-semibold my-0">{title}</h2>
          {/* Right-aligned content as shown in image - e.g., icons, user menu */}
          <div className="flex items-center gap-4">
            {/* Placeholder for icons/user menu */}


          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>  
  );
};

// SidebarLink Component//
const SidebarLink = ({
  href,
  icon,
  label,
  pathname,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
}) => {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 p-3 rounded-lg transition duration-200 ${
        isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
};

export default SidebarWithHeader;




