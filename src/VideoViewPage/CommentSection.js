import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosConfig';

const CommentSection = ({ updateComments }) => {
    const { id } = useParams();
    const [newComment, setNewComment] = useState('');
    const [commentList, setCommentList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingComment, setEditingComment] = useState('');

    useEffect(() => {
        // Fetch comments from the server
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/api/videos/${id}/comments`);
                setCommentList(response.data.comments);
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
        try {
            
            const response = await axios.post(`/videos/${id}`, {
                comment: newComment, headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            const updatedComments = [response.data, ...commentList];
            setCommentList(updatedComments);
            setNewComment('');
            updateComments(id, updatedComments);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleEditChange = (e) => {
        setEditingComment(e.target.value);
    };

    const handleEditSubmit = async (index) => {
        try {
            // Update edited comment on the server
            const response = await axios.patch(`/users/${id}/comments/${index}`, {
                comment: editingComment
            });
            const updatedComments = commentList.map((comment, i) =>
                i === index ? response.data.comment : comment
            );
            setCommentList(updatedComments);
            setEditingIndex(null);
            setEditingComment('');
            updateComments(id, updatedComments);
        } catch (error) {
            console.error('Error editing comment:', error);
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
        try {
            // Delete comment from the server
            await axios.delete(`/users/${id}/comments/${index}`);
            const updatedComments = commentList.filter((_, i) => i !== index);
            setCommentList(updatedComments);
            updateComments(id, updatedComments);
        } catch (error) {
            console.error('Error deleting comment:', error);
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
