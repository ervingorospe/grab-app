export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="text-theme-title font-serif text-4xl font-black md:text-5xl lg:text-6xl">
          Thank You!
        </h1>
        <p className="mt-2 text-gray-600">Your registration was successful.</p>
        <p className="mt-1 text-gray-600">You can now log in and start using our services.</p>
        <a
          href="/login"
          className="button bg-primary-600 hover:bg-primary-700 mt-6 inline-flex w-full text-white"
        >
          Go to Login
        </a>
      </div>
    </div>
  )
}
