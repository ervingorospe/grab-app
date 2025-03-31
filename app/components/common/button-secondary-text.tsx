import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  customClass?: string | null
  href: string
}

export default function ButtonText({ children, customClass, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`focus:ring-secondary-500 text-secondary-500 hover:text-secondary-600 w-full flex-1 ${customClass}`}
    >
      {children}
    </Link>
  )
}
