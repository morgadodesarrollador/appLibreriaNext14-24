// app/providers.tsx
'use client'

import { AuthProvider } from '@/context/auth/AuthProvider'
import {NextUIProvider} from '@nextui-org/react'
import React from 'react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </AuthProvider>
  )
}