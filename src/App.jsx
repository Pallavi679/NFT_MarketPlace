import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.Services'
import Alert from './components/Alert'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'



const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>

      <Alert />
      <Loading />
    </div>
  )
}

export default App
