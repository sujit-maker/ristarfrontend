import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

const AddCompanyForm = ({ onClose }: { onClose: () => void }) => {
  const [statusActive, setStatusActive] = useState(true);
  const [showBankAccounts, setShowBankAccounts] = useState(false);
  const [bankAccounts, setBankAccounts] = useState<any[]>([]);
  const [showPortsOfBusiness, setShowPortsOfBusiness] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);

  const addBankAccount = () => {
    setBankAccounts([...bankAccounts, {}]);
  };

  const removeBankAccount = (index: number) => {
    const newAccounts = bankAccounts.filter((_, i) => i !== index);
    setBankAccounts(newAccounts);
  };

  const addContact = () => {
    setContacts([...contacts, {}]);
  };

  const removeContact = (index: number) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg">
      <div className="relative w-full max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Add New Company</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Status Toggle */}
          <div className="col-span-2 flex items-center justify-start">
            <span className="text-white mr-2">Status</span>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                statusActive ? 'bg-blue-600' : 'bg-gray-600'
              }`}
              onClick={() => setStatusActive(!statusActive)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  statusActive ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-white ml-2">Active</span>
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="companyName"
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Reference No. */}
          <div>
            <label htmlFor="referenceNo" className="block text-sm font-medium text-gray-300 mb-1">Reference No.</label>
            <input
              type="text"
              id="referenceNo"
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
              defaultValue=""
              readOnly
            />
          </div>

          {/* Address */}
          <div className="col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">Address <span className="text-red-500">*</span></label>
            <textarea
              id="address"
              rows={3}
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500 resize-y"
            ></textarea>
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">Country <span className="text-red-500">*</span></label>
            <div className="relative">
              <input
                type="text"
                id="country"
                placeholder="Search for a country..."
                className="w-full p-2 pl-10 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
            <input
              type="text"
              id="phone"
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">Website</label>
            <input
              type="url"
              id="website"
              defaultValue="example.com"
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Business Types */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Business Types <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Customer</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Handling Agent</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Shipper</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Land Transport</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Carrier</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Deport Terminal</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Consignee</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Surveyor</span>
              </label>
              <label className="flex items-center text-gray-300 text-sm">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" />
                <span className="ml-2">Leasor</span>
              </label>
            </div>
          </div>

          {/* Credit Terms */}
          <div>
            <label htmlFor="creditTerms" className="block text-sm font-medium text-gray-300 mb-1">Credit Terms</label>
            <input
              type="text"
              id="creditTerms"
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Credit Limit */}
          <div>
            <label htmlFor="creditLimit" className="block text-sm font-medium text-gray-300 mb-1">Credit Limit</label>
            <input
              type="number"
              id="creditLimit"
              defaultValue={0}
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Remark for Documentation */}
          <div className="col-span-2">
            <label htmlFor="remark" className="block text-sm font-medium text-gray-300 mb-1">Remark for Documentation</label>
            <textarea
              id="remark"
              rows={3}
              className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500 resize-y"
            ></textarea>
          </div>
        </div>

        {/* Bank Accounts Section */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Bank Accounts</h3>
            <button onClick={() => setShowBankAccounts(!showBankAccounts)} className="text-blue-400 hover:text-blue-300 text-sm">
              {showBankAccounts ? 'Hide' : 'Show'}
            </button>
          </div>

          {showBankAccounts && (
            <>
              {bankAccounts.map((account, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-700 rounded-lg p-4 mb-4 relative">
                  <h4 className="col-span-2 text-md font-semibold text-white mb-2">Bank Account #{index + 1}</h4>
                  <button onClick={() => removeBankAccount(index)} className="absolute top-2 right-2 text-red-400 hover:text-red-300 text-sm">Remove</button>

                  <div>
                    <label htmlFor={`accountNo-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Account No.</label>
                    <input
                      type="text"
                      id={`accountNo-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`bankName-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Bank Name</label>
                    <input
                      type="text"
                      id={`bankName-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor={`address-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Address</label>
                    <input
                      type="text"
                      id={`address-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`usci-${index}`} className="block text-sm font-medium text-gray-300 mb-1">USCI</label>
                    <input
                      type="text"
                      id={`usci-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`branchName-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Branch Name</label>
                    <input
                      type="text"
                      id={`branchName-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`branchCode-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Branch Code</label>
                    <input
                      type="text"
                      id={`branchCode-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`swiftCode-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Swift Code</label>
                    <input
                      type="text"
                      id={`swiftCode-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`currency-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Currency</label>
                    <input
                      type="text"
                      id={`currency-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
              <button onClick={addBankAccount} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-4">+ Add Bank Account</button>
            </>
          )}
        </div>

        {/* Ports of Business Section */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Ports of Business</h3>
            <button onClick={() => setShowPortsOfBusiness(!showPortsOfBusiness)} className="text-blue-400 hover:text-blue-300 text-sm">
              {showPortsOfBusiness ? 'Hide' : 'Show'}
            </button>
          </div>

          {showPortsOfBusiness && (
            <div className="grid grid-cols-1 gap-4 mt-4">
              {/* Port Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Port Type</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center text-gray-300">
                    <input type="radio" name="portType" value="main" className="form-radio h-4 w-4 text-blue-600" defaultChecked />
                    <span className="ml-2">Main</span>
                  </label>
                  <label className="inline-flex items-center text-gray-300">
                    <input type="radio" name="portType" value="icd" className="form-radio h-4 w-4 text-blue-600" />
                    <span className="ml-2">ICD</span>
                  </label>
                </div>
              </div>

              {/* Search Ports */}
              <div>
                <label htmlFor="searchPorts" className="block text-sm font-medium text-gray-300 mb-1">Search Ports</label>
                <div className="relative">
                  <input
                    type="text"
                    id="searchPorts"
                    placeholder="Search ports by name or code"
                    className="w-full p-2 pl-10 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Selected Ports */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Selected Ports</label>
                <div className="w-full p-2 rounded-lg bg-gray-700 text-gray-400 border border-gray-600 min-h-[40px] flex items-center">
                  No ports selected
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contacts Section */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Contacts</h3>
            <button onClick={() => setShowContacts(!showContacts)} className="text-blue-400 hover:text-blue-300 text-sm">
              {showContacts ? 'Hide' : 'Show'}
            </button>
          </div>

          {showContacts && (
            <>
              {contacts.map((contact, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-700 rounded-lg p-4 mb-4 relative">
                  <h4 className="col-span-2 text-md font-semibold text-white mb-2">Contact #{index + 1}</h4>
                  <button onClick={() => removeContact(index)} className="absolute top-2 right-2 text-red-400 hover:text-red-300 text-sm">Remove</button>

                  <div>
                    <label htmlFor={`contactName-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                    <input
                      type="text"
                      id={`contactName-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`contactEmail-${index}`} className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                    <input
                      type="text"
                      id={`contactEmail-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`contactPhone-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                    <input
                      type="text"
                      id={`contactPhone-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`contactDesignation-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Designation</label>
                    <input
                      type="text"
                      id={`contactDesignation-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`contactDepartment-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Department</label>
                    <input
                      type="text"
                      id={`contactDepartment-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`contactEmail-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id={`contactEmail-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`contactMobile-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Mobile</label>
                    <input
                      type="text"
                      id={`contactMobile-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor={`contactLandline-${index}`} className="block text-sm font-medium text-gray-300 mb-1">Landline</label>
                    <input
                      type="text"
                      id={`contactLandline-${index}`}
                      className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              ))}
              <button onClick={addContact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-4">+ Add Contact</button>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-700 flex justify-end">
          <button onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg mr-2">Cancel</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">Add Company</button>
        </div>
      </div>
    </div>
  );
};

export default AddCompanyForm; 