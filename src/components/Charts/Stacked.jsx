import React from 'react'
import { 
  ChartComponent,
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject, 
  Legend, 
  Category, 
  StackingColumnSeries, 
  Tooltip 
} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';


const Stacked = ({width, height, id, tooltip, legendSettings}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id={id}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: {width: 0} }}
      tooltip={tooltip}
      legendSettings={legendSettings}
    >
      <Inject 
        services={[
          Legend,
          Category,
          StackingColumnSeries,
          Tooltip
        ]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked