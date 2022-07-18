
import React from 'react';

const Create = () => {


    const create = (e) => {
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'ETxzi1gID-S1u24hPt4vSWInVUdvME4wUnFkR05HYkU1RGN6RnZjMk0wYldwalNtUTMn'
            },
            body: JSON.stringify({
                metadata: {
                    media_filter: { sort: 'publish_start_date:dsc', limit: 25 },
                    title: 'dynamic',
                    description: 'dytnamic',
                    author: 'dv',
                    link: 'dyan'
                }
            })
        };

        fetch('https://api.jwplayer.com/v2/sites/2rIV9BRI/playlists/dynamic_playlist/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }


    const deletelist = (e) => {
        const options = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: 'ETxzi1gID-S1u24hPt4vSWInVUdvME4wUnFkR05HYkU1RGN6RnZjMk0wYldwalNtUTMn'
            }
        };

        fetch('https://api.jwplayer.com/v2/sites/qhZuuSx3/playlists/qhZuuSx3/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const newPage = (e) => {
        const options = { method: 'GET' };

        fetch('https://cdn.jwplayer.com/previews/8VAOiJxB-5XxrbcdD', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    return (

        <div>
            <button onClick={create}>create</button>
            <button onClick={deletelist}>Delete</button>
            <a href='https://cdn.jwplayer.com/previews/8VAOiJxB-5XxrbcdD'>
                <button onClick={newPage}>page</button>
            </a>
        </div>
    )
}
export default Create;