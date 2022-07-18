import React, { useState, useEffect } from 'react';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {

    const [posts, setPosts] = useState([]);
    const Playlist = async () => {
        const response = await axios.get('https://cdn.jwplayer.com/v2/playlists/8VAOiJxB');

        const data = await response.data;
        setPosts(data.playlist);
    }

    useEffect(() => {
        Playlist();
    }, []);

    const list = (e) => {
        console.log(posts)
    }


    return (


        <div width="1080">
            <Carousel width={1920}>
                <div>
                    <div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Tue Jun 21 2022 14:10:34 GMT+0530 (India Standard Time)" /><meta itemprop="name" content="Pexels-bhupen-kumar-6635693" /><meta itemprop="duration" content="P0Y0M0DT0H0M8S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/e2KXU5bZ-1920.jpg" /><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/e2KXU5bZ-L3ZR6vTY.mp4" /><iframe src="https://cdn.jwplayer.com/players/e2KXU5bZ-P43ApThx.html" width="640" height="360" frameborder="0" scrolling="auto" title="Pexels-bhupen-kumar-6635693" allowfullscreen></iframe></div>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <iframe></iframe>
                    <video src="https://cdn.jwplayer.com/manifests/3DBUMhah.mp4" controls="true"></video>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <button onClick={list}>List</button>

        </div>
    )
}
export default Slider;
