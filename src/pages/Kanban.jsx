import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban"
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header category={"App"} title={"Kanban"}/>
        <KanbanComponent
          id="Kanban"
          dataSource={kanbanData}
          keyField='Status'
          cardSettings={{
            contentField: "Summary",
            headerField: "Id"
          }}
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item}/>
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  )
}

export default Kanban