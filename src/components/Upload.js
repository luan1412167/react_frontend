import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { isModuleDeclaration } from '@babel/types'
import axios from 'axios';

const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  // const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }
  const addProject = (newProject) => {
    let formData = new FormData();
    formData.append('picture', newProject.picture[0]);
    
    return axios.post(`http://localhost:3008/projects`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      // JSON responses are automatically parsed.
    }).catch(e => {
      this.errors.push(e);
    });
  };
  const handleSubmit = (files) => { 
    console.log(files)
  }


  return (
    <div>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
      />
    </div>
    // <div>
    //   <Dropzone
    //     getUploadParams={getUploadParams}
    //     onChangeStatus={handleChangeStatus}
    //     onSubmit={handleSubmit}
    //     accept="image/*,audio/*,video/*"
    //   />
    // </div>

  )
}

export default MyUploader;
