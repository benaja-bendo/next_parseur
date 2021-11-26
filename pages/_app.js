import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from '../components/layout'
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (

        <Layout>
          <Component {...pageProps} />
        </Layout>
   
  )
} 

export default MyApp
