import { Sidebar } from '@/layout'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />
      <div className="bg-blueGray-100 relative md:ml-64">{children}</div>
    </>
  )
}
