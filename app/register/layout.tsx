import { Header } from '@/layout'

export default function RegistrationLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <Header />

      <main>
        <section className="relative h-full min-h-screen w-full">{children}</section>
      </main>
    </section>
  )
}
