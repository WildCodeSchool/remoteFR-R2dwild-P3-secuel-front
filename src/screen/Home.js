import Events from '../components/Events'
import Welcome from '../components/Welcome'

import './Home.css'

const Home = visitor => {
  return (
    <div className='home'>
      <Welcome visitor={visitor.visitor} />
      <Events />
    </div>
  )
}

export default Home
