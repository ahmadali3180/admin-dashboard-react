import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from "react-icons/go"
import {
  Stacked,
  Pie,
  Button, 
  SparkLine
} from "../components"
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div 
        className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
          h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 hover:drop-shadow-xl'
        >
          <div className='flex justify-between items-center gap-4'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='font-medium text-2xl'>$61,386.86</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
              bgColor={"bg-gradient-to-r from-cyan-400 to-cyan-500"} 
              color={'white'}
              text="Download"
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div 
              key={item.title} 
              className='bg-white dark:text-gray-200
            dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl hover:drop-shadow-xl'
          >
                <button 
                  type={"button"} 
                  color={{color: item.iconColor, backgroundColor: item.iconBg}}
                  className={`text-2xl opacity-0.9. rounded-full p-4 hover:drop-shadow-xl`}
                >
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>{item.amount}</span>
                  <span className={`text-sm text-gray-400 ml-2`}></span>  
                </p>
                <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Ecommerce