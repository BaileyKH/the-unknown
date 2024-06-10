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
            <SwiperSlide><Link to={`/gear/${trendingGear[0].id}`} aria-label={`navigates to ${trendingGear[0].item} detail page`}><img src={trendingGear[0].img} width="268" height="151" alt="white and orange camping tent" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[4].id}`} aria-label={`navigates to ${trendingGear[4].item} detail page`}><img src={trendingGear[4].img} width="268" height="151" alt="black camping backpack with beige closing straps" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[8].id}`} aria-label={`navigates to ${trendingGear[8].item} detail page`}><img src={trendingGear[8].img} width="268" height="151" alt="green and blue sleeping bag" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[12].id}`} aria-label={`navigates to ${trendingGear[12].item} detail page`}><img src={trendingGear[12].img} width="268" height="151" alt="white ceramic camping mug with handle" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[16].id}`} aria-label={`navigates to ${trendingGear[16].item} detail page`}><img src={trendingGear[16].img} width="268" height="151" alt="light tan camping shirt with front image of blue and red vans" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[2].id}`} aria-label={`navigates to ${trendingGear[2].item} detail page`}><img src={trendingGear[2].img} width="268" height="151" alt="green camping tent" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[6].id}`} aria-label={`navigates to ${trendingGear[6].item} detail page`}><img src={trendingGear[6].img} width="268" height="151" alt="red and tan waterproof camping backpack" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[10].id}`} aria-label={`navigates to ${trendingGear[10].item} detail page`}><img src={trendingGear[10].img} width="268" height="151" alt="light gray and navy blue sleeping bag" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[14].id}`} aria-label={`navigates to ${trendingGear[14].item} detail page`}><img src={trendingGear[14].img} width="268" height="151" alt="set of five camping cooking pans" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            <SwiperSlide><Link to={`/gear/${trendingGear[18].id}`} aria-label={`navigates to ${trendingGear[18].item} detail page`}><img src={trendingGear[18].img} width="268" height="151" alt="heavy duty brown and black camping boots" className="rounded-lg user-select-none" loading="lazy" decoding="async"/></Link></SwiperSlide>
            </Swiper>
        </div>
    );
}
