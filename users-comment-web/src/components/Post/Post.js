import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Post.css';

const Post = () => {
    const { userId } = useParams();
    let [comment, setComment] = useState([]);
    let [header, setHeader] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${userId}`)
        .then(res => res.json())
        .then(data => setComment(data))

        //
        fetch(`https://jsonplaceholder.typicode.com/posts/?id=${userId}`)
        .then(res => res.json())
        .then(data => setHeader(data))

        // 
        
    },[])
    return (
        
        <div className="home">
            {
                header.map((ele) => 
                    <div key={ele.id}>
                        <h1 style={{fontSize: '30px'}}> {ele.title}</h1>
                        <p style={{fontSize: '20px'}}>{ele.body}</p>
                    </div>
                )
            }
            
            

            {
                comment.map(ele => 
                        <div className='comment' key={ele.id}>
                            <img src={`https://randomuser.me/api/portraits/med/women/${ele.id}.jpg`} alt="" />
                           <div>
                           <p style={{fontWeight: 'bold'}}>{ele.name}</p>
                           <p style={{fontSize: '15px'}}>{ele.email}</p>
                           <p>{ele.body}</p>
                           </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Post;