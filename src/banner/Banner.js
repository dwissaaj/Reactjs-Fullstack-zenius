import { Swiper, SwiperSlide } from "swiper/react";
import ban1 from '../assets/ban1.jpg'
import ban2 from '../assets/ban2.jpg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "@mui/material";

export default function App() {
  return (
    <>
      <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ban1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ban2} alt="" /></SwiperSlide>
      </Swiper>
      </Container>
    </>
  );
}
