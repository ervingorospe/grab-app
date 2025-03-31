import '../../styles/header.css'
import { ButtonPrimary, ButtonSecondaryText } from '@/common'

export default function Header() {
  return (
    <header className="fixed top-0 z-100 w-full">
      <div className="container flex items-center justify-end py-4">
        <nav className="mt-4 hidden items-center gap-8 sm:flex">
          <ButtonSecondaryText href="/login">Login</ButtonSecondaryText>
          <ButtonPrimary href="/register">Create An Account</ButtonPrimary>
        </nav>
      </div>
    </header>
  )
}
