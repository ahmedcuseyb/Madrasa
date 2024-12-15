"use client"
import React from 'react'
import Header from './_components/Navigation'
import Background from './_components/Background'
import AboutPage from './_components/About'
import CoursesPage from './_components/Courses'
import WhyUs from './_components/WhyUs'
import Facts from './_components/Facts'
import Testimonials from './_components/Testimonials'
import Contact from './_components/Contact'
import FAQSection from './_components/FAQ'
import Footer from './_components/Footer'


export default function page() {
  return (
    <div>
      <Header/>
      <Background/>
      <AboutPage/>
      <CoursesPage/>
      <WhyUs/>
      <Facts/>
      <Testimonials/>
      <Contact/>
      <FAQSection/>
      <Footer/>
     
    </div>
  )
}
