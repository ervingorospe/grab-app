import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  customClass?: string | null
  href: string
}

export default function ButtonPrimary({ children, customClass, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`button bg-primary-600 hover:bg-primary-700 inline-flex text-white ${customClass}`}
    >
      {children}
    </Link>
  )
}
