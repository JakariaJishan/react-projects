import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  let [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
          <p style={{fontSize: '80px', textAlign:'center'}}>My Posts</p>

      {
        post.map((ele) => (
            <div className="home" key={ele.id}>
                <p>Post: {ele.id}</p>
                <h1> {ele.title}</h1>
                <p >{ele.body}</p>
                <p style={{marginBottom: '20px', marginTop: '40px'}}><Link  to={`/post/${ele.id}`}>see more</Link></p>
                
            </div>
        ))
      }
    </div>
  );
};

export default Home;
