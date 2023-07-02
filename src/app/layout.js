import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local';
import AuthProvider from '@/_context/AuthProvider'
import { ToastContainer } from 'react-toastify';

const iranSanse = localFont({
  src: [
    {
      path: '../../public/fonts/IRANSansXFaNum-Bold.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/IRANSansXFaNum-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/IRANSansXFaNum-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IRANSansXFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'فرانسیسکو',
  description: 'آپلود تصاویر',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl' suppressHydrationWarning={true} >
      <AuthProvider>
        <body className={iranSanse.className}>
          {children}

        <ToastContainer />
        </body>
      </AuthProvider>
    </html>
  )
}
