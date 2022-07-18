import ReactJWPlayer from 'react-jw-player';
import React from 'react';

const Player = () => {

    return (

        <div>

            <ReactJWPlayer
                playerId='5XxrbcdD'
                playerScript='https://cdn.jwplayer.com/libraries/5XxrbcdD.js'
                playlist='https://cdn.jwplayer.com/v2/playlists/8VAOiJxB?format=mrss'
            />
        </div>
    )
}
export default Player;