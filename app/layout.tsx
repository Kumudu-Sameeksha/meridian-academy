import './globals.css'
import { Navbar, Footer } from '@/components/site'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'Meridian Academy | Where Great Minds Find Their Path'
    ,description:'A premium education institute and tutor platform.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en">
    <body><Navbar/>{children}<Footer/></body></html>}
