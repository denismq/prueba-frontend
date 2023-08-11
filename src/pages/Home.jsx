import React from 'react'
import Input from '../components/Input'

const Home = () => {
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
                            <div className="c-form">
                                <h2 className="c-form__title">
                                    Completa tus datos
                                </h2>
                                <div className="c-form__inner">
                                    <div className="c-form__form-row">
                                    <Input
                                        type='text'
                                        label='UserName'
                                        name='username'
                                        className={`form-control ${
                                        errors['username'] ? 'is-invalid' : ''
                                        }`}
                                        value={value}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                />                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section section--discount'>
            <div className="o-container"></div>
        </section>
        <section className='section section--technology'>
            <div className="o-container"></div>
        </section>
        
    </>
  )
}

export default Home