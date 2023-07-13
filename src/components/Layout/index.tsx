'use client'

import Header from '@/components/Header';
import { AlertContext } from '@/context/Alert';
import { LoadingContext } from '@/context/Loading';
import { Loading } from '@/components/Loading';
import { Alert } from '@/components/Alert';
import { useState } from 'react';

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [alert, setAlert] = useState({
        isOpen: false,
        message: "",
      });
      const [isLoading, setIsLoading] = useState(false);

    return (
        <>
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
        </>
    )
}

export default Layout