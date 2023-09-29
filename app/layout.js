import DefaultNavbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Dashboard - Next Js',
  description: 'This is demo next js dashboard. Created by Irfan Ahmed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <DefaultNavbar children={children}></DefaultNavbar>
      </body>
    </html>
  )
}
