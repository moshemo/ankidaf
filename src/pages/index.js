import React from 'react'
import Sticky from 'react-stickynode'
import { ThemeProvider } from 'styled-components'

import { theme } from 'CSS/theme'
import GlobalStyle, { AppWrapper, ContentWrapper } from 'CSS/global'
import { ResetCSS } from 'CSS/reset'

import SEO from 'Components/seo'

import AppSlider from 'Modules/appClassic/AppSlider'
import Banner from 'Modules/appClassic/Banner'
import DesignedAndBuilt from 'Modules/appClassic/DesignedAndBuilt'
import Faq from 'Modules/appClassic/Faq'
import Features from 'Modules/appClassic/Features'
import FeatureTab from 'Modules/appClassic/FeatureTab'
import Footer from 'Modules/appClassic/Footer'
import JoinTrail from 'Modules/appClassic/JoinTrail'
import KeyFeatures from 'Modules/appClassic/KeyFeatures'
import Navbar from 'Modules/appClassic/Navbar'
import PricingPolicy from 'Modules/appClassic/PricingPolicy'
import Testimonial from 'Modules/appClassic/Testimonial'

import 'antd/dist/antd.css'

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="Anki Daf - Take the Anki Challenge" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  )
}
