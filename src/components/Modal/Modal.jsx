import React, { useState } from 'react';
import './Modal.css';
import axios from 'axios';

const Modal = ({ isOpen, onClose }) => {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    function handleChange(e) {
        setFiles([...e.target.files]);
    }


    function handleSubmit(e) {
        e.preventDefault();
        const url = import.meta.env.BACKEND_URL + '/attachments';
        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post(url, formData, config)
            .then(res => {
                console.log(res.data);
                setUploadedFiles[res.data.fileUrl]
            })
            .catch(err => console.log(err))

    }

    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-content">
                <h2>Select Files</h2>
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleChange} />
                    <button type="submit">Upload</button>
                    <button onClick={onClose}>Cancel</button>
                </form>
                {uploadedFiles.map((file, index) => (
                    <div key={index}>
                        <h4>{file.name}</h4>
                        <p>{file.size}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modal;
