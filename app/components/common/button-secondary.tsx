import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  customClass?: string | null
  href: string
}

export default function ButtonSecondary({ children, customClass, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`button bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 inline-flex text-white ${customClass}`}
    >
      {children}
    </Link>
  )
}
