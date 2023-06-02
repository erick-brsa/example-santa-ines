import '../globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laboratorio Clínico Santa Inés',
  description: 'Sitio web de Laboratorio Clínico Santa Inés',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function AuthLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Laboratorio Clínico Santa Inés</title>
      </head>
      <body className={`bg-gray-100 ${inter.className}`}>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="/img/logo.jpeg"
                  alt="" 
              />
            </Link>
          </div>
        </nav>
      </header>
        {children}
      </body>
    </html>
  )
}
