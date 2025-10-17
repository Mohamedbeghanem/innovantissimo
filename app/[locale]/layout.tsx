import React from "react"
import { ClientProviders } from "@/components/client-providers"
import { ClientLayout } from "@/components/client-layout"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body>
        <ClientProviders>
          <ClientLayout>{children}</ClientLayout>
        </ClientProviders>
      </body>
    </html>
  )
}