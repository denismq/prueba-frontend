import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const SliderTech = () => {
  return (
    <div className="c-slider">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            //breakpoints={sliderSettings}
            //loop={true}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            //navigation
            pagination={{ el: '.c-slider__custom-pagination', clickable: true }}
            //scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="c-slider__item">
                        <div className="c-slider__content">
                            <div className="c-slider__star"></div>
                            <h3 className="c-slider__title">PHP</h3>
                            <p className='c-slider__description'>
                                Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. 
                                Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. 
                                Amet diam dolor tincidunt congue sagittis in.                                
                            </p>
                            <Link to="#">
                                <button className='c-button c-button--blue'>Ver Tecnología</button>
                            </Link>
                        </div>
                        <div className="c-slider__image">
                            <img src="images/tecnologia-1.jpg" alt="" />
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-slider__item">
                        <div className="c-slider__content">
                            <div className="c-slider__star"></div>
                            <h3 className="c-slider__title">FLUTTER</h3>
                            <p className='c-slider__description'>
                                Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. 
                                Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. 
                                Amet diam dolor tincidunt congue sagittis in.                                
                            </p>
                            <Link to="#">
                                <button className='c-button c-button--blue'>Ver Tecnología</button>
                            </Link>                            
                        </div>
                        <div className="c-slider__image">
                            <img src="images/tecnologia-1.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="c-slider__item">
                        <div className="c-slider__content">
                            <div className="c-slider__star"></div>
                            <h3 className="c-slider__title">DISEÑO UX/UI</h3>
                            <p className='c-slider__description'>
                                Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. 
                                Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. 
                                Amet diam dolor tincidunt congue sagittis in.                                
                            </p>
                            <Link to="#">
                                <button className='c-button c-button--blue'>Ver Tecnología</button>
                            </Link>                            
                        </div>
                        <div className="c-slider__image">
                            <img src="images/tecnologia-1.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="c-slider__custom-pagination"></div>
    </div>
  )
}

export default SliderTech