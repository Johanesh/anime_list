'use client'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import "@/styles/index.scss";
import Header from '@/components/Header';
import { useState } from 'react';
import { AlertContext } from '@/context/Alert';
import { LoadingContext } from '@/context/Loading';
import { Loading } from '@/components/Loading';
import { Alert } from '@/components/Alert';

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
  const [alert, setAlert] = useState({
    isOpen: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <html>
      <body className={roboto.className}>
        <AlertContext.Provider value={{alert, setAlert}}>
          <LoadingContext.Provider value={{isLoading, setIsLoading}}>
            <Alert />
            <Loading />
            <Header />
            <main>
              {children}
            </main>
          </LoadingContext.Provider>
        </AlertContext.Provider>
      </body>
    </html>
  )
}
