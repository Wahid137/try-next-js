import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Try Next js',
  description: 'Try Next js',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          Header
        </nav>
        {children}

      </body>
    </html>
  )
}

export default RootLayout;