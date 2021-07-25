import React from 'react'
import MyHeader from '../components/myheader'
import About from '../components/aboutpage2'
import NewAboutPage from '../components/newabout'
import Footer from '../components/footer'
import TopAppBar from '../components/topbar'


const AboutMe = () => (

    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </head>
      {/* <TopAppBar /> */}
      < MyHeader />
      {/* <About /> */}
      <NewAboutPage />
      <Footer />
    </div>
)


export default AboutMe;
