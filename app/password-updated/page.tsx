export default function PasswordUpdated() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <p className="mt-2 text-gray-600">Your Password Has Been Updated! Log in again.</p>
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
