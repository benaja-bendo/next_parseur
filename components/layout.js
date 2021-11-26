import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 container w-full md:w-3/4 mx-auto mb-2 md:mb-12 px-4">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}