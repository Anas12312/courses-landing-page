import './styles/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import StudyPlans from './components/StudyPlans'
import Footer from './components/Footer'
import { useRef } from 'react'
import StudyTracks from './components/StudyTracks'
import LatestApps from './components/LatestApps'
import LatestVideos from './components/LatestVideos'
import LatestArcticles from './components/LatestArcticles'

function App() {
  const studyPlanRef = useRef(null)
  const mainRef = useRef(null)
  const tracksRef = useRef(null)
  const latestLessons = useRef(null)
  const faqRef = useRef(null)
  const registerRef = useRef(null)
  const scrollToStudyPlan = () => {
    studyPlanRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrolltoTracks = () => {
    tracksRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFAQ = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToLatestLessons = () => {
    latestLessons.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToRegister = () => {
    registerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToMainRef = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='h-screen w-screen overflow-x-hidden tracking-wide'>
      <Navbar
        scrollToMainRef={scrollToMainRef}
        scrollToFAQ={scrollToFAQ}
        scrollToLatestLessons={scrollToLatestLessons}
        scrollToRegister={scrollToRegister}
        scrollToStudyPlan={scrollToStudyPlan}
        scrolltoTracks={scrolltoTracks}
      />

      <div className='w-full h-full' ref={mainRef}>
        <Main />
      </div>

      <div className='w-full' ref={studyPlanRef}>
        <StudyPlans />
      </div>

      <div className='w-full' ref={tracksRef}>
        <StudyTracks />
      </div>

      <div className='w-full' ref={latestLessons}>
        <LatestApps />
      </div>

      <div className='w-full' ref={latestLessons}>
        <LatestVideos />
      </div>

      <div className='w-full' ref={latestLessons}>
        <LatestArcticles />
      </div>



      <Footer />
    </div>
  )
}

export default App