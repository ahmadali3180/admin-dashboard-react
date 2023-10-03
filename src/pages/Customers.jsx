import React from 'react'
import {
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Page,
  Selection,
  Edit,
  Sort,
  Filter,
  Inject,
  Toolbar
} from "@syncfusion/ej2-react-grids"
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header category={"Page"} title={"Customers"}/>
        <GridComponent
          width="auto"
          dataSource={customersData}
          allowPaging
          allowSorting
          gridLines='Horizontal'
          editSettings={{
            allowDeleting: true,
            allowEditing: true
          }}
          toolbar={['Delete']}
        >
          <ColumnsDirective>
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
        </GridComponent>

      </div>
    </div>
   
  )
}

export default Customers