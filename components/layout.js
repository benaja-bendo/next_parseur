import Navbar from './navbar'
import Footer from './footer'
import { Box } from '@mui/material'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head />
            <Navbar />
            <main>
                {children}
            </main>
            {/* <Footer/> */}
        </>
    )
}