import React, { useState, useEffect } from 'react'

import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VideoSeriesOne from "./components/VideoSeriesOne";
import VideoSeriesTwo from "./components/VideoSeriesTwo";
import Header from "./components/header";

function App() {
  const [courses, setCourses] = useState([])
  const [relatedContent, setRelatedContent] = useState([])
  const [loadingCourses, setLoadingCourses] = useState(false)

  useEffect(() => {
    getCoursesData()
  }, [])

  const getCoursesData = async () => {
    setLoadingCourses(true)
    try {
      const response = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setCourses(data?.courses)
        setRelatedContent(data?.relatedContent)
      } 
    } catch (error) {
      console.log(error)
    }
    setLoadingCourses(false)
  }
  

  return (
    <div>
      <Header />
      <Hero />
      <VideoSeriesOne data={courses} />
      <VideoSeriesTwo data={relatedContent} />
      <Faq />
      <Footer />
    </div>
  )
}

export default App;
