import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Error from '../components/Error'
import EmptyBoard from '../components/EmptyBoard'

const AppRoutes = () => {
  return (
    <>
      <Routes>
         {/* <Route path="*" element={<Error/>} /> */}
          <Route path="emptyboard" element={<EmptyBoard/>} />
      </Routes>

    </>
  )
}

export default AppRoutes