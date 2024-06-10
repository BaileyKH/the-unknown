import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { gearData } from '../GearData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export const Trending = () => {

    const [trendingGear, setTrendingGear] = useState(gearData())

    return (
        <div className="my-10 md:my-20">
            <p className="text-lg md:text-2xl font-bold text-color underline underline-offset-8 mb-3 md:mb-6">Trending Now</p>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            <SwiperSlide><Link to={`/gear/${trendingGear[0].id}`}><img src={trendingGear[0].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[4].id}`}><img src={trendingGear[4].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[8].id}`}><img src={trendingGear[8].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[12].id}`}><img src={trendingGear[12].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[16].id}`}><img src={trendingGear[16].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[2].id}`}><img src={trendingGear[2].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[6].id}`}><img src={trendingGear[6].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[10].id}`}><img src={trendingGear[10].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[14].id}`}><img src={trendingGear[14].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[18].id}`}><img src={trendingGear[18].img} width="268" height="151" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            </Swiper>
        </div>
    );
}
