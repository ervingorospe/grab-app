import Image from 'next/image'
import { ButtonSecondary } from '@/common'

export default function Home() {
  return (
    <div className="bg-primary-200 relative w-full py-16 md:py-24 lg:py-32">
      <div className="relative container flex h-full max-w-screen-2xl items-center">
        <div className="mt-16 grid max-w-screen-md gap-8 lg:mt-24">
          <h1 className="text-theme-title font-serif text-4xl font-black md:text-5xl lg:text-6xl">
            Your Ride, Your Way – Fast, Safe, and Reliable with Grab Car!
          </h1>

          <ul className="md:tex-xl text-primary-600 space-y-8 text-lg font-black lg:text-3xl">
            <li className="flex items-center space-x-4">
              <svg
                className="fill-primary-600 h-6 w-auto lg:h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <span>Safe & Secure</span>
            </li>
            <li className="flex items-center space-x-4">
              <svg
                className="fill-primary-600 h-6 w-auto lg:h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <span>Affordable Fares</span>
            </li>
            <li className="flex items-center space-x-4">
              <svg
                className="fill-primary-600 h-6 w-auto lg:h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <span>Quick Bookings</span>
            </li>
          </ul>
          <p className="prose xl:prose-lg text-primary-800 text-lg font-semibold md:text-xl">
            Get a ride in seconds—safe, affordable, and hassle-free!
          </p>

          <div>
            <ButtonSecondary
              customClass="button-lg md:button-xl lg:button-2xl"
              href="/registration"
            >
              Find Your Perfect Ride
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  )
}
