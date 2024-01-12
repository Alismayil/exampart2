import React from 'react'
import { Helmet } from "react-helmet";
import Header from '../components/header';
import OurMittionSection from '../components/ourMittionSection';
import EventspricingSection from '../components/eventspricingSection';
import OurTeamSection from '../components/ourTeamSection';
import FlowersPricingSection from '../components/flowersPricingSection';

function HomePage() {
  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Header/>
      <OurMittionSection/>
      <FlowersPricingSection/>
      <EventspricingSection/>
<OurTeamSection/>
    </>
  )
}

export default HomePage