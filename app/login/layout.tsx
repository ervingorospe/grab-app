import { Header } from '@/layout'

export default function LoginLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <Header />

      <main>
        <section className="relative h-full min-h-screen w-full py-40">{children}</section>
      </main>
    </section>
  )
}
