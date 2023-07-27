


import React from 'react'
import { useMatch } from 'react-router-dom'
import BlogFooter from '../BlogFotter/BlogFooter'
import Footer from '../Footer/Footer'

const FooterRouter = () => {

    const isBlogPage = useMatch('/blog')
    const isContactUsPage = useMatch('/contact')
  return (
    <>
    {
        isBlogPage ? <BlogFooter/> : isContactUsPage ? "" : <Footer/>  
    }
    </>
  )
}

export default FooterRouter
