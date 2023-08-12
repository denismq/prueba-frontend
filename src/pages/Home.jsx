import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Form from '../components/Form'
import SliderTech from '../components/Slider-technology'


const Home = () => {
    const [showSlider, setShowSlider] = useState()
    useEffect(() => {
  
        const handleResize = () => {
         //console.log('resize')
         const mediaQuery = window.matchMedia("(max-width: 767px)").matches;
         if (mediaQuery) {
            console.log('crear slider')
            setShowSlider(true);
         }else {
            setShowSlider(false);
         }
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
         window.removeEventListener('resize', handleResize);
        };
        
      }, []);


  return (
    <>
        <section className='section section--intro'>
            <div className="o-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="c-ads">
                                <div className="c-ads__header">
                                    <div className='c-ads__icono'>
                                        <img src="images/iconos.png" alt="" />
                                        <span>ES HORA DE</span>
                                    </div>
                                    <header className="headline">
                                        <h1 className='headline__title'>CYBER DAYS <span className='line-break'>EN <span className="bg-image">Más uno</span></span></h1>
                                        <p className="headline__description">Del 28 al 30 de Marzo</p>
                                    </header>
                                </div>
                                <div className="c-ads__content">
                                    <div className="c-ads__inner">
                                        <h2 className="c-ads__title">Registrate y obtén</h2>
                                        <div className="c-ads__coupon">
                                            <div className="c-ads__coupon-image">
                                                <img src="images/porcentaje.png" alt="%" />
                                            </div>
                                            <p className="c-ads__coupon-text">En tu primera <span className='line-break'>compra de</span> <span className='line-break text-pink'>CYBER DAYS</span></p>
                                        </div>
                                        <p className="c-ads__description">
                                            Aplicamos el descuento mediante un código que se te eviará a tu correo registrado.
                                            <br />Cupón válido del 28 al 30 de marzo.
                                            <br />*Aplican términos y condiciones
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section section--discount'>
            <div className="o-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ribbon">
                                <div className="ribbon__line"></div>
                                <div className="ribbon__image"></div>
                                <div className="ribbon__line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <header className="headline text-center">
                                <h1 className="headline__title">¿Como obtengo el descuento por Cyber Days?</h1>
                                <p className="headline__description">Para adquirir nuestro descuento especial por <span className='text-orange'>Cyber Days</span> sigue los siguientes pasos</p>
                            </header>
                        </div>
                        {showSlider ? (
                            <div className="c-slider c-slider--discount">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={{
                                        prevEl: '.swiper-button-prev',
                                        nextEl: '.swiper-button-next',
                                    }}
                                    //pagination={{ el: '.c-slider__custom-pagination', clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        <SwiperSlide>
                                            <div className="c-slider__item">
                                                <div className="steps">
                                                    <h2 className="steps__title">Paso 1</h2>
                                                    <div className="steps__circle">
                                                        <div className="steps__circle-inner">
                                                            <div className="steps__circle-image">
                                                                <img src="images/icono-paso-1.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="steps__description">
                                                        <h3>Registrate</h3>
                                                        <p>Completa el formulario con tus datos personales y acepta los términos</p>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="c-slider__item">
                                                <div className="steps">
                                                    <h2 className="steps__title">Paso 2</h2>
                                                    <div className="steps__circle">
                                                        <div className="steps__circle-inner">
                                                            <div className="steps__circle-image">
                                                                <img src="images/icono-paso-2.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="steps__description">
                                                        <h3>Recibe un cupón</h3>
                                                        <p>Recibiras un correo electrónico donde podras ver el cupon de descuento.</p>
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="c-slider__item">
                                                <div className="steps">
                                                    <h2 className="steps__title">Paso 3</h2>
                                                    <div className="steps__circle">
                                                        <div className="steps__circle-inner">
                                                            <div className="steps__circle-image">
                                                                <img src="images/icono-paso-3.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="steps__description">
                                                        <h3>Empieza a ahorrar</h3>
                                                        <p>¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online.</p>
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </SwiperSlide>
                                </Swiper>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>                            
                            </div>
                        ): (
                            <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="steps">
                                        <h2 className="steps__title">Paso 1</h2>
                                        <div className="steps__circle">
                                            <div className="steps__circle-inner">
                                                <div className="steps__circle-image">
                                                    <img src="images/icono-paso-1.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="steps__description">
                                            <h3>Registrate</h3>
                                            <p>Completa el formulario con tus datos personales y acepta los términos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="steps">
                                        <h2 className="steps__title">Paso 2</h2>
                                        <div className="steps__circle">
                                            <div className="steps__circle-inner">
                                                <div className="steps__circle-image">
                                                    <img src="images/icono-paso-2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="steps__description">
                                            <h3>Recibe un cupón</h3>
                                            <p>Recibiras un correo electrónico donde podras ver el cupon de descuento.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="steps">
                                        <h2 className="steps__title">Paso 3</h2>
                                        <div className="steps__circle">
                                            <div className="steps__circle-inner">
                                                <div className="steps__circle-image">
                                                    <img src="images/icono-paso-3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="steps__description">
                                            <h3>Empieza a ahorrar</h3>
                                            <p>¡Y listo! Podrás usarlo del 28 al 30 de Marzo por compras en nuestra tienda online.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>                            
                        )}
                    </div>
                </div>
            </div>
        </section>
        <section className='section section--technology'>
            <div className="o-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ribbon">
                                <div className="ribbon__line"></div>
                                <div className="ribbon__image"></div>
                                <div className="ribbon__line"></div>
                            </div>
                        </div>
                    </div>     
                    <div className="row">
                        <div className="col-md-12">
                            <header className="headline text-center">
                                <h1 className="headline__title">Las mejores tecnologias de Más uno</h1>
                            </header>
                        </div>                    
                    </div>               
                </div>
            </div>
            <SliderTech />
        </section>
        
    </>
  )
}

export default Home