import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './componentes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laboratorio Clínico Sanra Inés',
  description: 'Sitio web de Laboratorio Clínico Sanra Inés',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Laboratorio Clínico Sanra Inés</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
