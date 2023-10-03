import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buscador de Cep',
  description: 'Buscador de Cep',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={``}>{children}</body>
    </html>
  )
}
