import React, {useState, useMemo, useEffect} from 'react';
import styles from './MyEditor.module.css'

import {Button} from "antd";

import Editor from '@monaco-editor/react'

export function MyEditor({file, isSync, updateSync, onChange, onSave}) {

   const language = (() => {
      let extension = file.name.split('.')[1]
      if (extension === 'js') return 'javascript'
      else return extension
   })()

   const [value, setValue] = useState(file.content)

   useEffect(() => {
      setValue(file.content)
   }, [file.content])

   useEffect(() => {
      if (value === file.content) {
         updateSync(true)
      }
      else {
         updateSync(false)
      }
   }, [value])

   const onEditorChange = (val, editor) => {
      setValue(val)
      onChange(val)
   }

   const onSaveDemand = () => {
      onSave({name: file.name, content: value})
      updateSync(true)
   }


   return (
     <div className={styles['container']}>
        <div className={styles['header']}>
           <h4>{file.name}</h4>
           {!isSync ? <Button onClick={onSaveDemand}>Сохранить</Button> : null}
        </div>
        <Editor
          height={700}


          value={value}
          onChange={onEditorChange}
          language={language}
        />
     </div>

   )
}
