import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    let [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    // console.log(user.name);
    return (
        <div>
            <h1>this is home page</h1>
            {
                user.map((ele) => <User user={ele}></User>)
            }
        </div>
    );
};

export default Home;