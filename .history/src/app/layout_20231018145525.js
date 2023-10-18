import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "400", "500", "700"],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Try Next js',
  description: 'Try Next js',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>

        {children}

      </body>
    </html>
  )
}

export default RootLayout;