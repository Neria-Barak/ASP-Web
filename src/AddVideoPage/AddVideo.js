import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddVideo.css';

function AddVideo({addVideo}) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    img: '',
    description: '',
    video: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {;
        const fileURL = URL.createObjectURL(file);
        const { name } = e.target;
        setFormData({ ...formData, [name]: fileURL });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    var { title, author, img, description, video } = formData;
    addVideo({title, author, img, description, video})
    navigate('/');
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
