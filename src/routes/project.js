import Heroimg2 from '../components/Heroimg2';
import PricingCardStyles from '../components/PricingCardStyles';
import Work from '../components/Work';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      < PricingCardStyles/>
       <Footer/>
    </div>
  )
}

export default Project
