import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import Input from '../Input';
import Select from '../Select';
import Control from '../Control';

const favorites = [
    { label: 'Pollo', value: 'pollo' },
    { label: 'Cerdo', value: 'cerdo' },
    { label: 'Embutidos', value: 'embutidos' },
  ];

const defaultValues = {
    firstname: '',
    lastname: '',
    cellphone: '',
    email: '',
    favorites: ''
};

const Form = () => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        control,
        reset,
        setError,
        formState: { isSubmitting, errors, isSubmitSuccessful },
        } = useForm({
        defaultValues,
        });
  return (
    <div className="c-form">
        <h2 className="c-form__title">
            Completa tus datos
        </h2>
        <div className="row">
            <div className="col-md-6">
                <div className="c-form__row">
                    <Controller
                        name="firstname"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value} }) => (
                            <Input
                                type='text'
                                label='Nombres'
                                name='firstname'
                                placeholder='Ingrese sus nombres'
                                className={`form-control ${
                                errors['firstname'] ? 'is-invalid' : ''
                                }`}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />                  

                </div>
            </div>
            <div className="col-md-6">
                <div className="c-form__row">
                    <Controller
                        name="lastname"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value} }) => (
                            <Input
                                type='text'
                                label='Apellidos'
                                name='lastname'
                                placeholder='Ingrese sus apellidos'
                                className={`form-control ${
                                errors['lastname'] ? 'is-invalid' : ''
                                }`}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />                  
                </div>
            </div>
            <div className="col-md-6">
                <div className="c-form__row">
                    <Controller
                        name="cellphone"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value} }) => (
                            <Input
                                type='text'
                                label='Teléfono celular'
                                name='cellphone'
                                placeholder='Ingrese su numero telefonico'
                                className={`form-control ${
                                errors['cellphone'] ? 'is-invalid' : ''
                                }`}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="c-form__row">
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value} }) => (
                            <Input
                                type='text'
                                label='Correo electrónico'
                                name='email'
                                placeholder='Ingrese su correo electrónico'
                                className={`form-control ${
                                errors['email'] ? 'is-invalid' : ''
                                }`}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="c-form__row">
                    <Controller
                        name="favorites"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value} }) => (
                            <Select
                                options={favorites}
                                label='Tus favoritos'
                                name='favorites'
                                placeholder='Seleccione'
                                className={`form-control ${
                                errors['favorites'] ? 'is-invalid' : ''
                                }`}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                </div>
            </div>
            <div className="col-md-12">
                <div className="c-form__row">
                    <Control
                        type='checkbox'
                        name='terms'
                    >
                        Acepto los&nbsp;<a href="#terminos"> Términos y politicas de privacidad</a>
                    </Control>
                </div>
            </div>
            <div className="col-md-12">
                <div className="c-form__row">
                    <Control
                        type='checkbox'
                        name='info'
                    >
                        Acepto el&nbsp;<a href="#datos"> uso de datos personales</a>
                    </Control>
                </div>
            </div>
            <div className="col-md-12">
                <div className="c-form__row text-center">
                <button type='submit' className='c-button' disabled={isSubmitting}>
                    {isSubmitting ? (
                    <>
                        Guardando...
                        <span className='spinner-border spinner-border-sm ms-2'></span>
                    </>
                    ) : (
                        'Registrarme'
                    )}
                </button>
                </div>
            </div>
            <div className="col-md-12">
                <div className="c-form__row">
                    <p className="note">
                        Aprovecha las mejores ofertas y descuentos en cerdo, congelados, embutidos
                        y mucho más. No te pierdas de nada estos Cyberdays registrándote y obteniendo grandes descuentos exclusivos.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form