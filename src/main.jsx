import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './context/DataContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from 'react-scroll-to-top'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Render app with or without Clerk
const renderApp = () => {
  const appContent = (
    <ThemeProvider>
      <DataProvider>
        <CartProvider>
          {PUBLISHABLE_KEY ? (
            <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
              <App />
            </ClerkProvider>
          ) : (
            <App />
          )}
          <ScrollToTop color='white' smooth style={{ backgroundColor: '#fa2d37', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </CartProvider>
      </DataProvider>
    </ThemeProvider>
  )

  createRoot(document.getElementById('root')).render(appContent)
}

renderApp()
