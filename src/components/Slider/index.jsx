import React from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import './index.css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from 'swiper';
import ReactJWPlayer from 'react-jw-player';
import { useState } from 'react';
import { Modal } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons';

const Slider = () => {
  const [posts, setPosts] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  const showModal = (e) => {
    setVisible(true);
    console.log(e.target.value)
  }

  const hideModal = () => {
    debugger;
    // setVideoLink({ title: "", link: "" })

    setVisible(false);
  };
  const [videoLink, setVideoLink] = useState({ title: "", link: "" })
  const cardClickHandlerReturn = async (details) => {

    setVideoLink({ title: details.title, link: details.sources[0].file })
    showModal();
  }


  const Playlist = async () => {
    const response = await axios.get('https://cdn.jwplayer.com/v2/playlists/pM6HpCzJ');
    const data = await response.data;
    setPosts(data.playlist);
  }

  React.useEffect(() => {
    Playlist();
  }, []);

  console.log("posts", posts)

  return (
    <div className='slider__root'>
      <h3 className="text-base font-medium text-gray-900 hover:text-gray-900 text-2xl titltPadding ">Trending Videos</h3>
      <Swiper
        spaceBetween={0}
        loop={true}
        slidesPerView={2}
        centeredSlides={true}
        effect={"coverflow"}
        className="my-sldier"
        oopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerGroup={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}


      >

        {(posts || []).map((item, index) => (

          <SwiperSlide>
            <p className='title'>{item.title}</p>
            <PlayCircleOutlined style={{ fontSize: '55px', color: 'white' }} className='btn' />

            <div className='slider__item' onClick={() => cardClickHandlerReturn(item)}>
              <img style={{ width: '100%' }} src={item.image} alt={item.title} />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        title={videoLink.title}
        visible={visible}
        onCancel={hideModal}
        cancelText="Close"
        okButtonProps={{ disabled: true }}
        width={900}
        footer={null}
        destroyOnClose={true}
      >

        <ReactJWPlayer
          playerId='5XxrbcdD'
          playerScript='https://cdn.jwplayer.com/libraries/5XxrbcdD.js'
          file={videoLink.link}
          autostart="viewable"
        />

      </Modal>

    </div >
  )
}

export default Slider