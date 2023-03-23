import React, { useEffect, useState } from 'react';
import SingleComment from '../Comment/SingleComment';
import './Comments.css'

const Comments = () => {
    const [commets,setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h1>All Comments Rest Here</h1>
            
           <div className='comment-container'>
           {
                commets.map(comment => <SingleComment key={comment.id} comments={comment}></SingleComment>  )
            }
           </div>
        </div>
    );
};

export default Comments;