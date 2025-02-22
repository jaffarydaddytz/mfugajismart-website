import { Box } from '@mui/material'
import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import {useState, useEffect} from 'react'

import { Aboutuspage, BlogPage, FaqPage, ContactusPage, Homepagecomponent, MarketplacePage, OurServicesPage, PagenotFound } from '../pages'
import { NAVIGATE_TO_ABOUTPAGE, NAVIGATE_TO_BLOGPAGE,  NAVIGATE_TO_CONTACTPAGE,  NAVIGATE_TO_FAQ,  NAVIGATE_TO_HOMEPAGE, NAVIGATE_TO_INDEX, NAVIGATE_TO_MARKETPLACE, NAVIGATE_TO_PAGENOTFOUND, NAVIGATE_TO_SERVICEPAGE } from './types'
import { Layoutcomponent, Loadercomponent } from '../components'
import { ContactPage } from '@mui/icons-material'


const AppRoutes = () => {
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])


  if (loading){
    return <Loadercomponent/>
  }

  return (
    <Router>
      <Routes>
        
      <Route
          path={NAVIGATE_TO_INDEX}
          element={<Navigate to={NAVIGATE_TO_HOMEPAGE} replace />}
        />

        <Route element= {  <Layoutcomponent />} > 
        <Route path={NAVIGATE_TO_HOMEPAGE} element={<Homepagecomponent />} />
        <Route path={NAVIGATE_TO_ABOUTPAGE} element={<Aboutuspage />} />
        <Route path={NAVIGATE_TO_BLOGPAGE} element={<BlogPage />} />
        <Route path={NAVIGATE_TO_FAQ} element={<FaqPage/>} />
        <Route path={NAVIGATE_TO_SERVICEPAGE} element={<OurServicesPage/>} />
        <Route path={NAVIGATE_TO_MARKETPLACE} element={<MarketplacePage/>} />
        <Route path={NAVIGATE_TO_PAGENOTFOUND} element={<PagenotFound/>} />
        <Route path={NAVIGATE_TO_CONTACTPAGE} element={<ContactusPage/>} />
  

        </Route>
      


       
      </Routes>
    </Router>
  )
}

export default AppRoutes
