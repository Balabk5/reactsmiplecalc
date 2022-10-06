import React from 'react'
import { FilePicker } from '@apideck/file-picker'
import '@apideck/file-picker/dist/styles.css'


const UploadFiles = () => {
    const handleSelect = (file) => {
        console.log(file)
      }
    
      return (
        <FilePicker
          onSelect={handleSelect}
          trigger={<button>Pick a file</button>}
          jwt="token-123"
          appId="your-app-id"
          consumerId="your-consumer-id"
        />
      )
}

export default UploadFiles