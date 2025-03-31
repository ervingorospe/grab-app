import React from 'react'

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full items-center px-4 py-8 shadow-md md:flex-row md:flex-nowrap md:justify-start">
        <div className="mx-autp flex w-full flex-wrap items-center justify-between px-4 md:flex-nowrap md:px-10">
          {/* Brand */}
          <a
            className="hidden text-sm font-semibold text-gray-600 uppercase lg:inline-block"
            href="#"
          >
            Dashboard
          </a>
          {/* User */}
          <ul className="hidden list-none flex-col items-center md:flex md:flex-row">
            Ervin Gorospe
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  )
}
