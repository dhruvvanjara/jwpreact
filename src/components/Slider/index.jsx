import React from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Card } from 'antd';
import './index.css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from 'swiper';

const Slider = () => {
  const [posts, setPosts] = React.useState([]);

  const Playlist = async () => {
      const response = await axios.get('https://cdn.jwplayer.com/v2/playlists/8VAOiJxB');
      const data = await response.data;
      setPosts(data.playlist);
  }

  React.useEffect(() => {
      Playlist();
  }, []);

  console.log("posts", posts)

  return (
    <div className='slider__root'>
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
        modules={[Pagination, Navigation]}
      >
        {(posts || []).map((item, index) => (
          <SwiperSlide>
              <div className='slider__item'>
                <img style={{width: '100%'}} src={item.image} alt={item.title } />
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider