import React from 'react';
import './comment.css'

const SingleComment = (props) => {
   const {name,body,email} =props.comments

    return (
        <div className='comment-body'>
            <h2>Name:{name}</h2>
            <h3>Email:{email}</h3>
            <article><b>Comments:</b>   {body}</article>
        </div>
    );
};

export default SingleComment;