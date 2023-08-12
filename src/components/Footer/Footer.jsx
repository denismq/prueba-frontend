import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="o-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="footer__logo">
                  <img src="images/logo-masuno-blanco.png" alt="" />
                </div>
                <div className="footer__text">
                  <p>Nosotros</p>
                  <span>Somos Mas uno</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer__text">
                  <p>Te informamos</p>
                  <ul>
                    <li><a href="">Preguntas frecuentes</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                    <li><a href="">Medios de pago</a></li>
                    <li><a href="">Politicas de entrega</a></li>
                    <li><a href="">Libro de reclamaciones</a></li>
                  </ul>
                  <div className="footer__image">
                    <img src="images/libroreclamaciones.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">3</div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer