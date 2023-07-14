import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import "@/styles/index.scss";

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
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
