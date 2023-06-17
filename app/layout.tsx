import './globals.css'
import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'OUIZANE Younesse',
  description: 'Portfolio create by ouizane younesse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#282C33]">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
