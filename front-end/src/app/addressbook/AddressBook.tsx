"use client";

import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import AddCompanyForm from "./AddCompanyForm";

const AddressBook = () => {
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);

  const handleAddCompanyClick = () => {
    setShowAddCompanyModal(true);
  };

  const handleCloseModal = () => {
    setShowAddCompanyModal(false);
  };

  return (
    <div className="px-4 pt-0 pb-4">
      <div className="flex items-center justify-between mt-0 mb-4">
        <div className="relative w-full mr-4">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full p-2 pl-10 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
          onClick={handleAddCompanyClick}
        >
          <Plus size={16} /> Add Company
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden mt-4">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Company Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Business Type
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Country
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Ports
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      {showAddCompanyModal && <AddCompanyForm onClose={handleCloseModal} />}
    </div>
  );
};

export default AddressBook;