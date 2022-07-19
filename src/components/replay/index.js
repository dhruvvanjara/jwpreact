import { Modal } from 'antd'
import React from 'react'
import Card from './card'
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player';

const Index = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  
 
    
 
 

  return (
    <div className='max-w-full sm:max-w-6xl mx-auto px-5 my-20'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10' onClick={showModal}>
        {
            [1,2,3,4,5,6].map(item => {
                return (
                    <Card />
                )
            })
        }
      </div>

      <Modal
        title="Modal"
        visible={visible}
        onCancel={hideModal}
        cancelText="Close"
        okButtonProps={{ disabled:  true  }}
        width={900}
        footer={null}
      >
         
          <ReactJWPlayer
                playerId='5XxrbcdD'
                playerScript='https://cdn.jwplayer.com/libraries/5XxrbcdD.js'
                playlist='https://cdn.jwplayer.com/v2/playlists/8VAOiJxB?format=mrss'
            />
     
      </Modal>

    </div>

  )
}

export default Index