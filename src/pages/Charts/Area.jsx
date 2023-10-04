import React from 'react'
import { 
  ChartComponent, 
  SeriesDirective, 
  SeriesCollectionDirective, 
  Inject, 
  Legend, 
  DateTime, 
  SplineAreaSeries
} from "@syncfusion/ej2-react-charts"
import { areaCustomSeries, AreaPrimaryXAxis, AreaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

const Area = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header title="Inflation in Percentage" category="Chart"/>
        <ChartComponent
      id='area-chart'
      height="420px"
      primaryXAxis={AreaPrimaryXAxis}
      primaryYAxis={AreaPrimaryYAxis}
      legendSettings={{ background: 'white' }}
      chartArea={{
        border: { width: 0 }
      }}
      tooltip={{
        enable: true
      }}
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
    >
      <Inject services={[DateTime, SplineAreaSeries, Legend]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective
            key={index}
            {...item}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
       </div>
    </div>
  )
}

export default Area