import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewMore from './components/ViewMore'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero title="Test title" subtitle="Test Subtitle"/>
    <HomeCards/>
    <JobListings/>
    <ViewMore/>
    </div>
  )
}

export default App
