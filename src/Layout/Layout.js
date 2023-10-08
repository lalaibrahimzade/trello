import React from 'react'
import Header from '../components/Header'
import Board from '../components/Board'

const MainLayout = (props) => {
  return (
    <>
      <Header/> 
      {props.children}
      <Board/>
    
    </>
  )
}

export default MainLayout