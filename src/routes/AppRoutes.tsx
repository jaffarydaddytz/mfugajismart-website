import { Box } from '@mui/material'
import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import {useState, useEffect} from 'react'

import { Homepagecomponent } from '../pages'
import { NAVIGATE_TO_HOMEPAGE, NAVIGATE_TO_INDEX } from './types'
import { Layoutcomponent, Loadercomponent } from '../components'


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

        </Route>
      


       
      </Routes>
    </Router>
  )
}

export default AppRoutes
