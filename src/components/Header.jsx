import React from 'react';

import imgPromo from '../images/promo.svg';

export default () => (
    <header className="bg-yellow-300">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
            <div className="flex-1">
                <h1 className="text-6xl font-bold text-yellow-900">¡Hola! Soy Javier</h1>
                <p className="text-xl font-light">Creo aplicaciones web.</p>
            </div>
            <img src={imgPromo} alt="Un programador caminando" style={{ height: '300px'}}/>
        </div>
    </header>
);
