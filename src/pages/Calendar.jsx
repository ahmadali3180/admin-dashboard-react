import React from 'react'
import { 
  ScheduleComponent,
  Day, 
  Week, 
  WorkWeek, 
  Month, 
  Agenda,
  Inject, 
  Resize,
  DragAndDrop
} from "@syncfusion/ej2-react-schedule"

import { scheduleData, weeklyStats } from '../data/dummy'

import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header category={"App"} title={"Calendar"}/>
        <ScheduleComponent
          height="650px"
          eventSettings={{
            dataSource: scheduleData
          }}
          selectedDate={new Date(2023, 0, 10)}
        >
          <Inject services={[Day, Week, WorkWeek, Agenda, Month, Resize, DragAndDrop]}/>
        </ScheduleComponent>
      </div>
    </div>
  )
}

export default Calendar