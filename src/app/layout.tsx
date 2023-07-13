import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import "@/styles/index.scss";
import Header from '@/components/Header';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'],})

export const metadata: Metadata = {
  title: 'Animext',
  description: 'Your source of anime',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
