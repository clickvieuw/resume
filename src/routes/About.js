import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='about-container'>
      <Navbar/>
      <Heroimg2 heading="About my work" text="with a passion for building scalable,
      user focused solutions, i turn ideas into reliable software"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
