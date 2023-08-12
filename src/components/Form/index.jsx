import React, { useState, useEffect }from 'react'
import { useForm, Controller } from 'react-hook-form';
import Input from '../Input';
import Select from '../Select';
import Control from '../Control';

const favorites = [
    { label: 'Pollo', value: 'pollo' },
    { label: 'Cerdo', value: 'cerdo' },
    { label: 'Embutidos', value: 'embutidos' },
  ];

const emailPattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Ingrese un email valido',
};

const numberPattern = {
    value: /^(0|[1-9]\d*)(\.\d+)?$/,
    message: 'Solo numeros',
};

const defaultValues = {
    firstname: '',
    lastname: '',
    cellphone: '',
    email: '',
    favorites: '',
    terms: '',
    personal: ''
};

const Form = () => {
    const [isCheckedTerms, setIsCheckedTerms] = useState(false);
    const [isCheckedPersonal, setIsCheckedPersonal] = useState(false);
    const [sentForm, setSentForm] = useState(false);

    const {
        handleSubmit,
        control,
        reset,
        formState: { isSubmitting, errors, isSubmitSuccessful },
        } = useForm({
        defaultValues,
        });

    const onSubmit = (data) => {
        console.log(data);
    }

    const Error = ({ children }) => <p style={{ color: 'red', fontSize: '14px' }}>{children}</p>;

    useEffect(() => {
        if (isSubmitSuccessful) {
        reset();
        setSentForm(true)
        }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="c-form">
        <div className="c-form__image"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {
                    sentForm ? (
                        <div className="success-form">
                            <p className='success-form__header'>¡Formulario enviado exitosamente!</p>
                            <p className='success-form__text'>Recibiras un correo electrónico donde podras ver el cupon de descuento.</p>
                        </div>
                    ) : (
                        <>
                        <h2 className="c-form__title">
                            Completa tus datos
                        </h2>
                        <div className="col-md-6">
                            <div className="c-form__row">
                                <Controller
                                    name="firstname"
                                    control={control}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Ingrese nombres',
                                        },
                                    }}
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
                                {errors['firstname'] && <Error>{errors['firstname']?.message}</Error>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="c-form__row">
                                <Controller
                                    name="lastname"
                                    control={control}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Ingrese apellidos',
                                        },
                                    }}
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
                                {errors['lastname'] && <Error>{errors['lastname']?.message}</Error>}                 
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="c-form__row">
                                <Controller
                                    name="cellphone"
                                    control={control}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Ingrese telefono',
                                        },
                                        pattern: numberPattern,
                                    }}
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
                                {errors['cellphone'] && <Error>{errors['cellphone']?.message}</Error>}                 
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="c-form__row">
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Ingrese correo electronico',
                                        },
                                        pattern: emailPattern,
                                    }}
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
                                {errors['email'] && <Error>{errors['email']?.message}</Error>}
                            </div>
                        </div>
                        <div className="col-md-6 margin-bottom">
                            <div className="c-form__row">
                                <Controller
                                    name="favorites"
                                    control={control}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Selecciona una opcion',
                                        },
                                    }}
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
                                {errors['favorites'] && <Error>{errors['favorites']?.message}</Error>}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="c-form__row">
                                <Controller
                                    name="terms"
                                    control={control}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Selecciona terminos y politicas de privacidad',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value} }) => (
                                        <Control
                                            type='checkbox'
                                            name='terms'
                                            onChange={(val) => {
                                                onChange(val)
                                            }}
                                            checked={isCheckedTerms}
                                        >
                                            Acepto los&nbsp;<a href="#terminos"> Términos y politicas de privacidad</a>
                                        </Control>
                                    )}
                                />
                                {errors['terms'] && <Error>{errors['terms']?.message}</Error>}                        
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="c-form__row">
                            <Controller
                                    name="personal"
                                    control={control}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Selecciona uso de datos personales',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value} }) => (
                                        <Control
                                            type='checkbox'
                                            name='personal'
                                            onChange={(val) => {
                                                onChange(val)
                                            }}
                                            checked={isCheckedPersonal}
                                        >
                                            Acepto el&nbsp;<a href="#datos"> uso de datos personales</a>
                                        </Control>
                                    )}
                                />
                                {errors['personal'] && <Error>{errors['personal']?.message}</Error>}                          
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="c-form__row text-center">
                            <button type='submit' className='c-button' disabled={isSubmitting}>
                                Registrarme
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
                    </>
                    )
                }
            </div>
        </form>
    </div>
  )
}

export default Form