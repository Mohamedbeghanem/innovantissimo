"use client"

"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import formbricks from "@formbricks/js"

if (typeof window !== "undefined") {
  formbricks.setup({
    environmentId: "cmgwgqxvk0zh8ad018tcqfmt6",
    appUrl: "https://app.formbricks.com",
  })
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Toaster />
    </div>
  )
}
