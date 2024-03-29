import Artworks from '../components/Artworks'
import Empty from '../components/Empty'
import Hero from '../components/Hero'
import { useGlobalState } from '../store'

const Home = () => {
  const [auctions] = useGlobalState('auctions')
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Home
