import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Try Next js',
  description: 'Try Next js',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}

      </body>
    </html>
  )
}

export default RootLayout;