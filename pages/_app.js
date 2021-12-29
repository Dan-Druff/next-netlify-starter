import "../styles/globals.css"
import { AuthProvider } from "../context/AuthContext"
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster/>
    </AuthProvider>
  )
}

export default MyApp
