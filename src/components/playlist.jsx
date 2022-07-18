
import { BrowserRouter as Router, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";


const Playlist = () => {

    const [posts, setPosts] = useState([]);


    const getUserData = async () => {
        const response = await axios.get('https://cdn.jwplayer.com/v2/playlists/8VAOiJxB');

        const data = await response.data;
        setPosts(data);
    }

    useEffect(() => {
        getUserData();
    }, []);




    const link = (e) => {

        console.log(posts.playlist[0].link)
        e.preventDefault();
    }


    const playlistlist = (e) => {
        const options = { method: 'GET', headers: { Accept: 'application/json; charset=utf-8' } };

        fetch('https://cdn.jwplayer.com/v2/playlists/8VAOiJxB', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));


    }


    return (
        <div>
            <div>
                <button onClick={link}>console</button>
            </div>
            <Router>
                <div>
                    {/* redirects to video */}
                    {/* <a href={posts.playlist[0].link} target="_blank" rel="noreferrer">
                        <button>Redirect</button>
                    </a> */}
                </div>
            </Router>
            <button onClick={playlistlist}>List</button>
        </div>

    )
}
export default Playlist;