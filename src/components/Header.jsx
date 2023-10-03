import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-600 dark:text-gray-200 text-md font-medium'>{category}</p>
      <p className='text-slate-800 dark:text-gray-300 text-3xl font-extrabold tracking-tight'>{title}</p>
    </div>
  )
}

export default Header