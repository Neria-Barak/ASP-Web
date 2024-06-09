import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentSection = ({comments, updateComments}) => {
    const { id } = useParams();
    const [newComment, setNewComment] = useState('');
    const [commentList, setCommentList] = useState(comments);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingComment, setEditingComment] = useState('');

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedComments = [newComment, ...commentList];
        setCommentList(updatedComments);
        setNewComment('');
        updateComments(id, updatedComments);
    };

    const handleEditChange = (e) => {
        setEditingComment(e.target.value);
    };

    const handleEditSubmit = (index) => {
        const updatedComments = commentList.map((comment, i) => (i === index ? editingComment : comment));
        setCommentList(updatedComments);
        setEditingIndex(null);
        setEditingComment('');
        updateComments(id, updatedComments);
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditingComment(commentList[index]);
    };

    const cancelEditing = () => {
        setEditingIndex(null);
        setEditingComment('');
    };

    const deleteComment = (index) => {
        const updatedComments = commentList.filter((_, i) => i !== index);
        setCommentList(updatedComments);
        updateComments(id, updatedComments);
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
