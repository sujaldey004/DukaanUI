import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './component/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-4'>
    <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}></RevenueCard>
    </div>
  )
}

export default App
