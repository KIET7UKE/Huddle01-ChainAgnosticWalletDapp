import '../styles/globals.css'
import { DivergentClientProvider, getDivergentClient } from "@0xvaibhav/divergent-client";

const divergentClient = getDivergentClient("http://localhost:40011")

function MyApp({ Component, pageProps }) {
  return (
  <DivergentClientProvider value={divergentClient}>
    <Component {...pageProps} />
  </DivergentClientProvider>
  )
}

export default MyApp
