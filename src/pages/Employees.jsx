import React from 'react'
import {
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Page,
  Search,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids"
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Employees = () => {
  const {currentMode} = useStateContext()
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header category={"Page"} title={"Employees"}/>
        <GridComponent
          width="auto"
          dataSource={employeesData}
          allowPaging
          gridLines='Horizontal'
          toolbar={['Search']}
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Search, Toolbar]} />
        </GridComponent>

      </div>
    </div>
   
  )
}

export default Employees