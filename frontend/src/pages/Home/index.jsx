import React from 'react'
import SectionOne from '../SectionOne'
import SectionTwo from '../SectionTwo'
import SectionThird from '../SectionThird'
import SectionFour from '../SectionFour'
import SectionFive from '../SectionFive'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet><title>Home</title></Helmet>
      <SectionOne/>
      <SectionTwo/>
      <SectionThird/>
      <SectionFour/>
      <SectionFive/>
    </div>
  )
}

export default Home