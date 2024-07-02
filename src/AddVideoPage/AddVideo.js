import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddVideo.css';
import axios from '../axiosConfig';

function AddVideo({addVideo, currentUser}) {
  const navigate = useNavigate();
  let id = null;
  if (currentUser) {
    id = currentUser._id;
  }
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
  });
  const [imgFile, setImgFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const { name } = e.target;
      if (name === 'img') setImgFile(file);
      if (name === 'video') setVideoFile(file);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('description', formData.description);
    if (imgFile) data.append('img', imgFile);
    if (videoFile) data.append('video', videoFile);
    
    try {
      const response = await axios.post(`/users/${id}/videos`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        // Handle success as needed
        console.log('Video added successfully:', response.data);
        addVideo(response.data.video);
        navigate('/');
      } 
      
    } catch (error) {
      alert("can only add video when signed in!");
    }
  
  
  };

  return (
    <div className="add-video-container">
      <h2>Add Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            className="form-control" 
            id="inputGroupFile02"
            name="img"
            // value={formData.img}
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Video:</label>
          <input
            type="file"
            className="form-control" 
            id="inputGroupFile02"
            name="video"
            // value={formData.video}
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Add Video</button>
      </form>
    </div>
  );

};

export default AddVideo;
