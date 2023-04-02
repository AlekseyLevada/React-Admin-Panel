import React from 'react'
import './App.css'
import Router from './utils/router'
import { RouterProvider } from 'react-router-dom'


export function App() {
  return(
    <div className="App">
        <RouterProvider router={Router}/>
      </div>
  )
}