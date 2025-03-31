import { LoginForm } from '@/forms'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full content-center items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </>
  )
}
