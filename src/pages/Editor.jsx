import React from 'react';
import { 
  HtmlEditor, 
  Image, 
  Inject, 
  Link, 
  QuickToolbar, 
  Toolbar, 
  RichTextEditorComponent
} from "@syncfusion/ej2-react-richtexteditor"

import { EditorData } from '../data/dummy';
import {Header} from "../components"

const Editor = () => {
  return (
    <div className='mt-12 m-2 md:m-4 p-2 md:p-4'>
      <div className='bg-white p-8 rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category={"App"} title={"Editor"}/>
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, QuickToolbar, Image, Link]}/>
      </RichTextEditorComponent>
      </div>
    </div>
  )
}

export default Editor