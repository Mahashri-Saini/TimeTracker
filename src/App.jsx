import React from 'react'
import FirstPage from './FirstPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PlanToday from './PlanToday'
import AnalyseToday from './AnalyseToday'
import ThisWeek from './ThisWeek.jsx'
import ThisMonth from './ThisMonth.jsx'
import ThisYear from './ThisYear.jsx'


function App() {
const router = createBrowserRouter([
   
{
path:"/",
element:<><FirstPage/><PlanToday/></>
},

{
    path:"/AnalyseToday",
    element:<><FirstPage/><AnalyseToday/></>
},

{path:"/ThisWeek",
element:<><FirstPage/><ThisWeek/></>
},
    {
        path:"/ThisMonth",
        element:<><FirstPage/><ThisMonth/></>
    },
    {
        path:"/ThisYear",
        element:<><FirstPage/><ThisYear/></>
    },
])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
