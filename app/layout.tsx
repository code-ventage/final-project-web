import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import '@fontsource-variable/inter'
import { Providers } from './providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Number Translator | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
