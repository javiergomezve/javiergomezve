import React from 'react';

import imgPromo from '../images/promo.svg';
import ContactForm from './ContactForm';

export default () => (
    <header className="bg-yellow-300">
        <div className="container mx-auto p-5 md:p-12 max-w-4xl">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold text-yellow-900">¡Hola! <br/> Soy Javier</h1>
                    <p className="text-xl font-light">Creo aplicaciones web.</p>
                </div>

                <img src={imgPromo} alt="Un programador caminando" style={{ height: '300px'}}/>
            </div>

            <div>
                <ContactForm/>
            </div>
        </div>
    </header>
);
