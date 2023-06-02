import '../globals.css'
import { Sidebar } from '../components/ui'
import { Inter } from 'next/font/google'

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
      <body className={`bg-gray-100 flex ${inter.className}`}>
      <Sidebar />
        {children}
      </body>
    </html>
  )
}
