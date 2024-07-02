import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosConfig';

const CommentSection = ({currentUser}) => {
    const { id } = useParams();
    const [newComment, setNewComment] = useState('');
    const [commentList, setCommentList] = useState([]);
    const [commentIdList, setCommentIdList] = useState([])
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingComment, setEditingComment] = useState('');

    useEffect(() => {
        // Fetch comments from the server
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/videos/${id}`);
                console.log(response.data);
                const contents = response.data.map(comment => comment.content);
                const ids = response.data.map(comment => comment._id);
                setCommentList(contents);
                setCommentIdList(ids);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [id]); // Fetch comments whenever the 'id' parameter changes

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (currentUser) {
            try {
                const response = await axios.post(`/videos/${id}`, {
                    content: newComment, id: currentUser._id}, {headers: {
                        'Content-Type': 'application/json',
                    }
                });
                
                const updatedComments = [response.data.content, ...commentList];
                setCommentList(updatedComments);
                const updatedIdList = [response.data._id, ...commentIdList];
                setCommentIdList(updatedIdList)
                setNewComment('');
                
            } catch (error) {
                console.error('Error adding comment:', error);
            }
    } else {
        alert("sign in first to comment!");
    }
    };

    const handleEditChange = (e) => {
        setEditingComment(e.target.value);
    };

    const handleEditSubmit = async (index) => {
        if (currentUser) {
        try {
            // Update edited comment on the server
            const response = await axios.patch(`/users/${currentUser._id}/comments/${commentIdList[index]}`, {
                content: editingComment
            });
            if (response) {
                const updatedComments = commentList.map((comment, i) =>
                    i === index ? editingComment : comment
                );
                setCommentList(updatedComments);
                setEditingIndex(null);
                setEditingComment('');
            }
        } catch (error) {
            alert("you can only edit your own comments!");
        }
    } else {
        alert("you can only edit your own comments!")
    }
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditingComment(commentList[index]);
    };

    const cancelEditing = () => {
        setEditingIndex(null);
        setEditingComment('');
    };

    const deleteComment = async (index) => {
        if (currentUser) {
        try {
            // Delete comment from the server
            console.log(commentIdList[index]);
            await axios.delete(`/users/${currentUser._id}/comments/${commentIdList[index]}`);
            const updatedComments = commentList.filter((_, i) => i !== index);
            setCommentList(updatedComments);
            const updatedCommentsId = commentIdList.filter((_, i) => i !== index);
            setCommentIdList(updatedCommentsId);
            console.log(commentIdList);
            
        } catch (error) {
            alert("you can only delete your own comments!");
        }
    } else {
        alert("you can only delete your own comments!");
    }
    };

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <form onSubmit={handleFormSubmit} className="comment-form">
                <input
                    type="text"
                    value={newComment}
                    onChange={handleInputChange}
                    placeholder="Write a comment..."
                    className="comment-input"
                />
                <button type="submit" className="comment-submit-button">Add</button>
            </form>
            <ul className="comment-list">
                {commentList.map((comment, index) => (
                    <li key={index} className="comment-item">
                        {editingIndex === index ? (
                            <div className="edit-comment">
                                <input
                                    type="text"
                                    value={editingComment}
                                    onChange={handleEditChange}
                                    className="comment-edit-input"
                                />
                                <button onClick={() => handleEditSubmit(index)} className="comment-edit-submit-button">Save</button>
                                <button onClick={cancelEditing} className="comment-edit-cancel-button">Cancel</button>
                            </div>
                        ) : (
                            <div className="comment-text">
                                {comment}
                                <div>
                                    <button onClick={() => startEditing(index)} className="comment-edit-button">Edit</button>
                                    <button onClick={() => deleteComment(index)} className="comment-delete-button">Delete</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;