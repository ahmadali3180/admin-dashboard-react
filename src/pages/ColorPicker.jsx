import React from 'react'
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs"

import { Header } from "../components"

const change = (args) => {
  document.getElementById("preview").style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
        <Header category={"App"} title={"Editor"}/>
        <div className='text-center'>
          <div id='preview'/>
          <div className='flex flex-wrap justify-center items-center gap-20'>
            <div>
              <p className='text-2xl font-semibold mt-4 mb-4'>Inline Pallete</p>
              <ColorPickerComponent 
                id='inline-palatte'
                mode='Palette'
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
            <div>
              <p className='text-2xl font-semibold mt-4 mb-4'>Inline Picker</p>
              <ColorPickerComponent 
                id='inline-picker'
                mode='Picker'
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker