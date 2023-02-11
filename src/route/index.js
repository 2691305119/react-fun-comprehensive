import React from 'react'
import { useRoutes } from "react-router-dom"
import Home from '../components/Home'
import Search from '../components/Search'

const GetRoutes = () => {
  return useRoutes([
    {
      path:'',
      element: <Home/>,
    },
    {
      path:`/search/:keyword`,
      element: <Search/>
    }
  ])
}

export default GetRoutes