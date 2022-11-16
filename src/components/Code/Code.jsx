import React, {useState, useEffect, useMemo} from "react";
import styles from './Code.module.css'

import {Modal} from "antd";

import {FileMenu} from "./FileMenu/FileMenu";
import {MyEditor} from "./MyEditor/MyEditor";

export function Code({data}) {
   // Сюда помещаются изменения после сохранения
   const [files, setFiles] = useState(data)

   const filenames = useMemo(() => Object.keys(files), [data])
   const [selectedFile, setSelectedFile] = useState(filenames[0])

   const [currentContent, setCurrentContent] = useState(null)

   const [isSync, setIsSync] = useState(true)

   const [showSaveDialog, setShowSaveDialog] = useState(false)
   const [nextFile, setNextFile] = useState(null)
   const [chose, setChose] = useState(null)
   useEffect(() => {
      if (chose === 'save') {
         setFiles((prev) => {
            setSelectedFile(nextFile)
            setNextFile(null)
            return {...prev, [selectedFile]: currentContent}
         })
      }
      if (chose === 'discard') {
         setSelectedFile(nextFile)
         setNextFile(null)
      }
   }, [chose])

   const onFileMenuSelect = (item) => {
      if (isSync) {
         setSelectedFile(item.key)
      }
      else {
         setNextFile(item.key)
         setShowSaveDialog(true)
      }

   }

   const onEditorChange = (val) => {
      setCurrentContent(val)
   }

   const updateSync = (isSync) => {
      setIsSync(isSync)
   }

   const saveChanges = () => {
      setChose('save')
      setShowSaveDialog(false)
   }
   const discardChanges = () => {
      setChose('discard')
      setShowSaveDialog(false)
   }

   return (
     <div className={styles['container']}>
        <FileMenu filenames={filenames} selectedFile={selectedFile} onSelect={onFileMenuSelect}/>
        <MyEditor file={{name: selectedFile, content:files[selectedFile]}} isSync={isSync} updateSync={updateSync} onChange={onEditorChange}/>
        <Modal open={showSaveDialog} okText='Да' cancelText='Нет' onOk={saveChanges} onCancel={discardChanges}>Сохранить изменения в <strong>{selectedFile}</strong>?</Modal>
     </div>
   )
}
