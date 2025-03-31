import { Sidebar, Navbar } from '@/layout'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64">
        <Navbar />
        {children}
      </div>
    </>
  )
}
