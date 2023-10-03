import React from 'react'
import {
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Resize, 
  Sort, 
  ContextMenu,
  Filter, 
  Page,
  ExcelExport, 
  PdfExport, 
  Edit, 
  Inject
} from "@syncfusion/ej2-react-grids"
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header category={"Page"} title={"Orders"}/>
        <GridComponent
          id="gridComp"
          dataSource={ordersData}
          allowPaging
          allowSorting
          gridLines='Horizontal'
        >
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Resize, ContextMenu, Filter, ExcelExport, PdfExport, Sort, Edit]} />
        </GridComponent>

      </div>
    </div>
   
  )
}

export default Orders