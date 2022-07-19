import { Modal } from 'antd'
import React from 'react'
import Card from './card'
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Index = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = (e) => {
    setVisible(true);
    console.log(e.target.value)
  }

  const hideModal = () => {
    setVisible(false);
  };




  const [posts, setPosts] = useState([]);
  const [videoLink, setVideoLink] = useState({ title: "", link: "" })


  const getUserData = async () => {
    const response = await axios.get('https://cdn.jwplayer.com/v2/playlists/8VAOiJxB');

    const data = await response.data;
    setPosts(data.playlist);
    console.log(posts)
  }

  useEffect(() => {
    getUserData();
  }, []);



  const cardClickHandlerReturn = async (details) => {
    setVideoLink({ title: details.title, link: details.sources[3].file })
    showModal();
  }

  return (

    <div className='max-w-full sm:max-w-6xl mx-auto px-5 my-20'>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 pb-5' >
        {
          posts.map((element, index) => {

            return (

              <div className="hover:scale-105" key={index} onClick={() => cardClickHandlerReturn(element)}>


                {/* {element.sources[3].file} */}
                <Card videoDetails={element} />

              </div>

            )

          })
        }
      </div>
      <div>
        <Modal
          title={videoLink.title}
          visible={visible}
          onCancel={hideModal}
          cancelText="Close"
          okButtonProps={{ disabled: true }}
          width={900}
          footer={null}
        >

          <ReactJWPlayer
            playerId='5XxrbcdD'
            playerScript='https://cdn.jwplayer.com/libraries/5XxrbcdD.js'
            file={videoLink.link}
          />

        </Modal>

      </div>
    </div>
  )
}

export default Index