import '../globals.css'
import { Inter } from 'next/font/google'
import { Header, Footer } from '../components/ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laboratorio Clínico Santa Inés',
  description: 'Sitio web de Laboratorio Clínico Santa Inés',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Laboratorio Clínico Santa Inés</title>
      </head>
      <body className={`bg-gray-100 grid grid-rows-[auto_1fr_auto] ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
