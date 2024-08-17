import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import Produts from '../../components/products/Produts'
import Recommendation from '../recommendation/Recommendation'
import Layout from '../../components/layout/Layout'

function Home() {
  return (

    <Layout>
      <HeroSection />
      <Recommendation />
      <Produts />
    </Layout>

  )
}

export default Home