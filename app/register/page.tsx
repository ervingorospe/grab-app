import { RegistrationForm } from '@/forms'

export default function Registration() {
  return (
    <div className="bg-primary-200 relative w-full py-16 md:py-24 lg:py-32">
      <div className="relative z-1 container max-w-screen-2xl">
        <div className="relative grid gap-8 xl:grid-cols-2">
          <div className="mt-16 max-w-screen-md space-y-8 lg:mt-24">
            <h1 className="text-theme-title font-serif text-4xl font-black md:text-5xl lg:text-6xl">
              Join the Ride Revolution!
            </h1>

            <p className="prose xl:prose-lg text-primary-800 max-w-xl text-lg font-semibold md:text-xl">
              Experience fast, reliable, and affordable rides at your fingertips. Whether you’re
              commuting to work or exploring a new city, our platform makes every journey seamless.
            </p>

            <ul className="md:tex-xl text-primary-600 space-y-8 text-lg font-black lg:text-3xl">
              <li className="flex items-center space-x-4">
                <svg
                  className="fill-primary-600 h-6 w-auto lg:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                <span>Fast Pickups</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="fill-primary-600 h-6 w-auto lg:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                <span>Easy Payments</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  className="fill-primary-600 h-6 w-auto lg:h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
                <span>24/7 Availability</span>
              </li>
            </ul>
          </div>
          <div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
