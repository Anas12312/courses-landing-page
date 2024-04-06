import './styles/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import StudyPlans from './components/Token'
import Footer from './components/Footer'
import { useRef } from 'react'

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
      <Footer />
    </div>
  )
}

export default App