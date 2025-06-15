import React from 'react'

import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewMore from '../components/ViewMore'

const HomePage = () => {
  return (
    <>
    <Hero title="Job Posting" subtitle="See all jobposting here"/>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewMore/>
    </>
  )
}

export default HomePage
