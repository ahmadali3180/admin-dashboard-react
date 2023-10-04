import React from 'react'
import { Header, LineChart } from "../../components"

const Line = () => {
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header title="Inflation Rate" category="Chart"/>
        <div className="w-full">
          <LineChart/>
        </div>
      </div>
    </div>
    
  )
}

export default Line