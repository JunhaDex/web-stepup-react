import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from '@/routes'
import '@/assets/css/main.css'
import { analytics } from '@/providers/firebase.provider.ts'
import { logEvent } from '@firebase/analytics'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  logEvent(analytics, 'site_open')
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
