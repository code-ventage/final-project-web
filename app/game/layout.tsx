import Footer from '@/components/footer'
import Navbar from '@/components/navbar/navbar'

export default function GameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        {children}
      </main>

      <Footer />
    </div>
  )
}
