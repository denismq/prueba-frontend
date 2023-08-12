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
                  <p>Somos Mas uno</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer__text">
                  <p>Te informamos</p>
                  <ul className='footer__menu'>
                    <li><Link to="#">Preguntas frecuentes</Link></li>
                    <li><Link to="#">Términos y condiciones</Link></li>
                    <li><Link to="#">Medios de pago</Link></li>
                    <li><Link to="#">Politicas de entrega</Link></li>
                    <li><Link to="#">Libro de reclamaciones</Link></li>
                  </ul>
                  <div className="footer__image">
                    <img src="images/libroreclamaciones.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer__text">
                  <p>Contáctanos</p>
                  <div className="footer__phone">
                    <img src="images/phone.png" alt="" />
                    <span>00000-0000</span>
                  </div>
                  <div className="socials">
                    <div className="socials__item">
                      <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2136 12.478L11.8359 8.49654H7.94515V5.91283C7.94515 4.82357 8.48866 3.76182 10.2312 3.76182H12V0.372012C12 0.372012 10.3949 0.103027 8.86019 0.103027C5.65604 0.103027 3.56167 2.00998 3.56167 5.46209V8.49654H0V12.478H3.56167V22.103H7.94515V12.478H11.2136Z" fill="#1A36A8"/>
                      </svg>                      
                    </div>
                    <div className="socials__item">
                      <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 2.23383C21.1905 2.59522 20.3206 2.83946 19.4076 2.94934C20.3396 2.38696 21.0552 1.49642 21.3922 0.435348C20.5062 0.964661 19.5369 1.3376 18.5261 1.53804C17.7027 0.654934 16.5297 0.103027 15.2315 0.103027C12.7388 0.103027 10.7178 2.13762 10.7178 4.64702C10.7178 5.00322 10.7577 5.34999 10.8347 5.68266C7.08348 5.49309 3.7577 3.68406 1.53149 0.934824C1.14305 1.60595 0.920477 2.38662 0.920477 3.21928C0.920477 4.79584 1.71738 6.18663 2.92841 7.00156C2.21164 6.97896 1.51065 6.78406 0.883953 6.43313C0.883695 6.45216 0.883695 6.4712 0.883695 6.49032C0.883695 8.69197 2.43951 10.5286 4.50424 10.9461C3.83959 11.128 3.14242 11.1547 2.46598 11.0239C3.0403 12.8292 4.70723 14.143 6.68224 14.1797C5.13752 15.3984 3.19129 16.1249 1.07671 16.1249C0.712336 16.1249 0.353117 16.1034 0 16.0614C1.99745 17.3507 4.36992 18.103 6.91883 18.103C15.221 18.103 19.7608 11.1788 19.7608 5.17401C19.7608 4.97692 19.7565 4.78095 19.7478 4.58611C20.6314 3.943 21.3941 3.14644 22 2.23383Z" fill="#1A36A8"/>
                      </svg>                      
                    </div>
                    <div className="socials__item">
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.02911 19.103H0.297321V6.4177H4.02911V19.103ZM2.16121 4.6873C0.967902 4.6873 0 3.64398 0 2.38435C8.54116e-09 1.77931 0.227698 1.19904 0.633002 0.771211C1.03831 0.34338 1.58802 0.103027 2.16121 0.103027C2.73439 0.103027 3.2841 0.34338 3.68941 0.771211C4.09471 1.19904 4.32241 1.77931 4.32241 2.38435C4.32241 3.64398 3.35411 4.6873 2.16121 4.6873ZM17.996 19.103H14.2722V12.9279C14.2722 11.4562 14.2441 9.56889 12.332 9.56889C10.3918 9.56889 10.0945 11.1678 10.0945 12.8219V19.103H6.3667V6.4177H9.9458V8.1481H9.99804C10.4963 7.15142 11.7133 6.09961 13.5289 6.09961C17.3057 6.09961 18 8.72489 18 12.1348V19.103H17.996Z" fill="#1A36A8"/>
                      </svg>                      
                    </div>
                  </div>
                  <div className="copyright">
                    © 2022 Mas uno Lima - Perú
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer