import Heroimg from '../components/Heroimg';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Heroimg/>
      <AboutContent/>
      <Work/>
       <Footer/>
    </div>
  )
}

export default Home
