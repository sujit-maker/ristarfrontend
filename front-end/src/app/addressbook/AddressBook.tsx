"use client";

import { useState } from "react";

const AddressBookPage = () => {
const [showBankAccounts, setShowBankAccounts] = useState(false);
const [showPortsSection, setShowPortsSection] = useState(false);
const [portType, setPortType] = useState<'Main' | 'ICD'>('Main');
const [searchPort, setSearchPort] = useState('');
const [selectedPorts, setSelectedPorts] = useState<string[]>([]);
const [showContacts, setShowContacts] = useState(false);
const [contacts, setContacts] = useState([
  {
    title:'' ,
    firstName:'',
    lastName:'',
    designation: '',
    department:'',
    email:'',
    mobile: '',
    landline:'',
  },
]);

const updateContact = (index: number, field: string, value: string) => {
  const updated = [...contacts];
  updated[index][field as keyof typeof updated[0]] = value;
  setContacts(updated);
};


const [bankAccounts, setBankAccounts] = useState([
  {
    accountNo: '',
    bankName: '',
    address: '',
    usci: '',
    branchName: '',
    branchCode: '',
    swiftCode: '',
    currency: '',
  },
]);

  const [companies, setCompanies] = useState([
    {
      name: "Customer1",
      type: "Customer",
      country: "India",
      port: "NHAVA SHEVA",
      status: "Active",
    },
    {
      name: "Depot1",
      type: "Depot Terminal",
      country: "India",
      port: "NHAVA SHEVA",
      status: "Active",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    type: "",
    country: "",
    port: "",
    status: "Active",
  });

  const handleSubmit = () => {
    setCompanies([...companies, form]);
    setShowModal(false);
    setForm({ name: "", type: "", country: "", port: "", status: "Active" });
  };
  const toggleBankAccounts = () => {
  setShowBankAccounts((prev) => !prev);
};

const updateBankAccount = (index: number, field: string, value: string) => {
  const updated = [...bankAccounts];
  updated[index][field as keyof typeof updated[0]] = value;
  setBankAccounts(updated);
};

const togglePortsSection = () => setShowPortsSection(prev => !prev);


  return (
    <div className="relative space-y-6 my-20 px-6">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">
          Company Management
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          + Add Company
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="text-left bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="px-6 py-3">Company Name</th>
              <th>Business Type</th>
              <th>Country</th>
              <th>Ports</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {companies.map((c, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{c.name}</td>
                <td>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {c.type}
                  </span>
                </td>
                <td>{c.country}</td>
                <td>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                    {c.port}
                  </span>
                </td>
                <td>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-10 px-4">
          <div className="bg-[#1F1F1F] text-white w-full max-w-4xl rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Add New Company</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* Status Toggle */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium">Status</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.status === "Active"}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.checked ? "Active" : "Inactive",
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-green-500 transition-all after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
                <span className="ml-3 text-sm">Active</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm">Company Name *</label>
                <input
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Reference No.</label>
                <input
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  value=""
                  readOnly
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm">Address *</label>
                <textarea
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  rows={2}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Country *</label>
                <input
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Phone</label>
                <input className="w-full bg-gray-800 border border-gray-600 rounded p-2" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input className="w-full bg-gray-800 border border-gray-600 rounded p-2" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Website</label>
                <input
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  placeholder="example.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm">Business Types *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    "Customer",
                    "Handling Agent",
                    "Shipper",
                    "Land Transport",
                    "Depot Terminal",
                    "Surveyor",
                    "Carrier",
                    "Consignee",
                    "Leassor",
                  ].map((type) => (
                    <label
                      key={type}
                      className="inline-flex items-center text-sm gap-2"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox accent-orange-500"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-1 text-sm">Credit Terms</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  defaultValue="0"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Credit Limit</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  defaultValue="0"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm">
                  Remark for Documentation
                </label>
                <textarea
                  className="w-full bg-gray-800 border border-gray-600 rounded p-2"
                  rows={2}
                />
              </div>
            </div>

            {/* Bank Accounts Section */}
<div className="mt-6">
  <div className="flex justify-between items-center mb-2">
    <h3 className="text-lg font-semibold">Bank Accounts</h3>
    <button
      onClick={toggleBankAccounts}
      className="text-blue-400 text-sm underline hover:text-blue-300"
    >
      {showBankAccounts ? 'Hide' : 'Show'}
    </button>
  </div>

  {showBankAccounts &&
    bankAccounts.map((account, index) => (
      <div
        key={index}
        className="border border-gray-700 rounded p-4 mb-4 bg-gray-900"
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-md font-semibold">Bank Account #{index + 1}</h4>
          {bankAccounts.length > 1 && (
            <button
              onClick={() =>
                setBankAccounts(bankAccounts.filter((_, i) => i !== index))
              }
              className="text-red-400 text-sm underline hover:text-red-300"
            >
              Remove
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Account No."
            className="bg-black border border-gray-600 p-2 rounded"
            value={account.accountNo}
            onChange={(e) =>
              updateBankAccount(index, 'accountNo', e.target.value)
            }
          />
          <input
            placeholder="Bank Name"
            className="bg-black border border-gray-600 p-2 rounded"
            value={account.bankName}
            onChange={(e) =>
              updateBankAccount(index, 'bankName', e.target.value)
            }
          />
          <input
            placeholder="Address"
            className="bg-black border border-gray-600 p-2 rounded col-span-2"
            value={account.address}
            onChange={(e) =>
              updateBankAccount(index, 'address', e.target.value)
            }
          />
          <input
            placeholder="USCI"
            className="bg-black border border-gray-600 p-2 rounded"
            value={account.usci}
            onChange={(e) =>
              updateBankAccount(index, 'usci', e.target.value)
            }
          />
          <input
            placeholder="Branch Name"
            className="bg-black border border-gray-600 p-2 rounded"
            value={account.branchName}
            onChange={(e) =>
              updateBankAccount(index, 'branchName', e.target.value)
            }
          />
          <input
            placeholder="Branch Code"
            className="bg-black border border-gray-600 p-2 rounded"
            value={account.branchCode}
            onChange={(e) =>
              updateBankAccount(index, 'branchCode', e.target.value)
            }
          />
          <input
            placeholder="Swift Code"
            className="bg-black border border-gray-600 p-2 rounded"
            value={account.swiftCode}
            onChange={(e) =>
              updateBankAccount(index, 'swiftCode', e.target.value)
            }
          />
          <input
            placeholder="Currency"
            className="bg-black border border-gray-600 p-2 rounded"
            value={account.currency}
            onChange={(e) =>
              updateBankAccount(index, 'currency', e.target.value)
            }
          />
        </div>
      </div>
    ))}

  {showBankAccounts && (
    <button
      onClick={() =>
        setBankAccounts([
          ...bankAccounts,
          {
            accountNo: '',
            bankName: '',
            address: '',
            usci: '',
            branchName: '',
            branchCode: '',
            swiftCode: '',
            currency: '',
          },
        ])
      }
      className="mt-2 px-3 py-1 bg-gray-800 text-white border border-gray-600 rounded hover:bg-gray-700 text-sm"
    >
      + Add Bank Account
    </button>
  )}
</div>

{/* Ports of Business Section */}
<div className="mt-6">
  <div className="flex justify-between items-center mb-2">
    <h3 className="text-lg font-semibold">Ports of Business</h3>
    <button
      onClick={togglePortsSection}
      className="text-blue-400 text-sm underline hover:text-blue-300"
    >
      {showPortsSection ? 'Hide' : 'Show'}
    </button>
  </div>

  {showPortsSection && (
    <div className="space-y-4">
      {/* Port Type */}
      <div className="bg-[#1F1F1F] border border-gray-700 rounded p-4">
        <label className="block text-sm font-medium mb-2">Port Type</label>
        <div className="flex gap-4">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="portType"
              value="Main"
              checked={portType === 'Main'}
              onChange={() => setPortType('Main')}
              className="form-radio text-blue-500"
            />
            Main
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="portType"
              value="ICD"
              checked={portType === 'ICD'}
              onChange={() => setPortType('ICD')}
              className="form-radio text-blue-500"
            />
            ICD
          </label>
        </div>
      </div>

      {/* Search Port */}
      <div className="bg-[#1F1F1F] border border-gray-700 rounded p-4">
        <label className="block text-sm font-medium mb-2">Search Ports</label>
        <input
          type="text"
          placeholder="Search ports by name or code"
          value={searchPort}
          onChange={(e) => setSearchPort(e.target.value)}
          className="w-full bg-black border border-gray-600 p-2 rounded"
        />
        {/* Optional dropdown suggestion here */}
        {searchPort && (
          <div className="mt-2 text-sm text-gray-400">
            <button
              onClick={() => {
                if (!selectedPorts.includes(searchPort)) {
                  setSelectedPorts([...selectedPorts, searchPort]);
                }
                setSearchPort('');
              }}
              className="text-blue-400 underline hover:text-blue-300"
            >
              + Add "{searchPort}"
            </button>
          </div>
        )}
      </div>

      {/* Selected Ports */}
      <div className="bg-[#1F1F1F] border border-gray-700 rounded p-4">
        <label className="block text-sm font-medium mb-2">Selected Ports</label>
        {selectedPorts.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No ports selected</p>
        ) : (
          <ul className="space-y-1">
            {selectedPorts.map((port, index) => (
              <li key={index} className="flex justify-between items-center text-sm">
                <span>{port}</span>
                <button
                  onClick={() =>
                    setSelectedPorts(selectedPorts.filter((_, i) => i !== index))
                  }
                  className="text-red-400 text-xs hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )}
</div>

{/* Contacts Section */}
<div className="mt-6">
  <div className="flex justify-between items-center mb-2">
    <h3 className="text-lg font-semibold">Contacts</h3>
    <button
      onClick={() => setShowContacts((prev) => !prev)}
      className="text-blue-400 text-sm underline hover:text-blue-300"
    >
      {showContacts ? 'Hide' : 'Show'}
    </button>
  </div>

  {showContacts &&
    contacts.map((contact, index) => (
      <div
        key={index}
        className="border border-gray-700 rounded p-4 mb-4 bg-gray-900"
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-md font-semibold">Contact #{index + 1}</h4>
          {contacts.length > 1 && (
            <button
              onClick={() =>
                setContacts(contacts.filter((_, i) => i !== index))
              }
              className="text-red-400 text-sm underline hover:text-red-300"
            >
              Remove
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Title"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.title}
            onChange={(e) =>
              updateContact(index, 'name', e.target.value)
            }
          />
          <input
            placeholder="Fisrt Name"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.firstName}
            onChange={(e) =>
              updateContact(index, 'name', e.target.value)
            }
          />
          <input
            placeholder="Last Name"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.lastName}
            onChange={(e) =>
              updateContact(index, 'name', e.target.value)
            }
          />
          <input
            placeholder="Designation"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.designation}
            onChange={(e) =>
              updateContact(index, 'designation', e.target.value)
            }
          />
          <input
            placeholder="Department"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.department}
            onChange={(e) =>
              updateContact(index, 'name', e.target.value)
            }
          />
          <input
            placeholder="Mobile"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.mobile}
            onChange={(e) =>
              updateContact(index, 'mobile', e.target.value)
            }
          />
          <input
            placeholder="Email"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.email}
            onChange={(e) =>
              updateContact(index, 'email', e.target.value)
            }
          />
          <input
            placeholder="Landline"
            className="bg-black border border-gray-600 p-2 rounded"
            value={contact.landline}
            onChange={(e) =>
              updateContact(index, 'email', e.target.value)
            }
          />
          
        </div>
      </div>
    ))}

  {showContacts && (
    <button
      onClick={() =>
        setContacts([
          ...contacts,
          {
            title:'',
            firstName: '',
            lastName:'',
            designation: '',
            department:'',
            mobile: '',
            email: '',
            landline:'',
          },
        ])
      }
      className="mt-2 px-3 py-1 bg-gray-800 text-white border border-gray-600 rounded hover:bg-gray-700 text-sm"
    >
      + Add Contact
    </button>
  )}
</div>




            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressBookPage;
