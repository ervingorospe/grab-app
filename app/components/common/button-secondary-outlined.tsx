import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  customClass?: string | null
  href: string
}

export default function ButtonSecondaryOutlined({ children, customClass, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`button border-secondary-500 hover:bg-secondary-500 focus:ring-secondary-500 text-secondary-500 inline-flex w-full border-2 hover:text-white ${customClass}`}
    >
      {children}
    </Link>
  )
}
