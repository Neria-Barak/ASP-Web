import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from '../axiosConfig'

function EditVideo({videos, editVideo, deleteVideo, currentUser}) {
    const { id } = useParams();
    const video = videos.find(element => element._id.toString() === id);

    const [formData, setFormData] = useState({
        title: video.title,
        author: video.author,
        img: video.img,
        description: video.description,
        video: video.video
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            const { name } = e.target;
            setFormData({ ...formData, [name]: fileURL });
        }
    };
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
    
        axios.patch(`users/${currentUser._id}/videos/${video._id}`, formData)
        .then(response => {
            editVideo(response.data.video);
        })
        .catch(error => console.error('Error updating video:', error));


        navigate(`/watch/${id}`);
    };

    const handleDelete = () => {
      axios.delete(`users/${currentUser._id}/videos/${video._id}`)
      .then(() => {
          deleteVideo(id);
      })
      .catch(error => console.error('Error deleting video:', error));

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
                onChange={handleFileChange}
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
                onChange={handleFileChange}
              />
            </div>
            <button type="submit">Edit Video</button>
            <button className="delete" onClick={handleDelete}>Delete Video</button>
          </form>
        </div>
      );
}

export default EditVideo;