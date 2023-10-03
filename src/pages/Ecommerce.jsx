import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from "react-icons/go"
import {
  Stacked,
  Pie,
  Button, 
  SparkLine
} from "../components"
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import {ecomBgImg} from "../data/dummy"

const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-6 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-600 relative top-0'>Earnings</p>
              <p className='text-2xl relative top-2 font-medium'>$78,512.01</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className='mt-6'>
            <Button 
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius={10}
              size={"sm"}
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center items-center gap-1'>
          {earningData.map((item) => (
            <div 
              key={item.title} 
              className='bg-white dark:text-gray-200
              dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ${item.pcColor === "red-600" ? "text-red-600" : "text-green-600"} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200
         dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-[780px]'
        >
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
              <span><GoDotFill/></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-emerald-400 hover:drop-shadow-xl'>
              <span><GoDotFill/></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p className='gap-10 items-center justify-center'>
                  <span className='text-3xl font-semibold'>$93,290</span>
                  <span className='ml-3 p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-emerald-400 text-white  text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$18,292</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  color="teal"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius={10}
                  size={"sm"}
                />
              </div>
            </div>
            <div className=''>
              <Stacked 
                width="320px"
                height="360px"
                id={'stack-chart'}
                tooltip={{enable: true}}
                legendSettings={{
                  background: "white"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce