'use client'

import { useAuth } from '@/context/AuthContext'

export default function UpdateProfile() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div className="bg-blueGray-100 relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 break-words shadow-lg">
      <div className="mb-0 rounded-t px-6 py-6">
        <div className="mb-3 text-left">
          <h6 className="text-2xl font-bold text-gray-700">My Account</h6>
        </div>
        <hr className="border-primary-500 mt-6 border-b-1" />
      </div>
      <div className="flex-auto px-4 py-6 lg:px-10">
        <form>
          <h6 className="text-primary-500 mb-6 text-sm font-bold uppercase">User Information</h6>
          <div className="flex flex-wrap space-y-6">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                  defaultValue={user?.firstName}
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                  defaultValue={user?.lastName}
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-email"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                  defaultValue={user?.email}
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-contact-number"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                  defaultValue={user?.contactNumber}
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-birth-date"
                >
                  Birth Date
                </label>
                <input
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                  defaultValue={user?.birthDate}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 text-left">
            <button className="button bg-primary-600 text-white hover:shadow-lg" type="submit">
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
