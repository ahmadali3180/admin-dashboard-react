import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip} from "@syncfusion/ej2-react-charts"

const SparkLine = ({id, height, width, data, color, currentColor, type}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color: currentColor, width: 2}}
      dataSource={data}
      xName='xval'
      yName='yval'
      type={type}
      legendSettings={{ background: 'white' }}
      tooltipSettings={{
        visible: true,
        format: "${xval} : data ${yval}"
      }}
    >
      <Inject services={[SparklineTooltip]} />    
    </SparklineComponent>
  )
}

export default SparkLine