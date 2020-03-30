import React from 'react';

import imgPromo from '../images/promo.svg';

export default () => (
    <header className="bg-yellow-300">
        <div className="container mx-auto p-5 md:p-12 max-w-4xl">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex-1">
                    <p className="text-6xl font-bold text-yellow-900">¡Hola!</p>
                    <p className="text-6xl font-bold text-yellow-900">Soy Javier</p>
                    <h1 className="text-2xl font-light">Y desarrollo aplicaciones.</h1>
                </div>

                <img src={imgPromo} alt="Un programador caminando" style={{ height: '300px'}}/>
            </div>
        </div>
    </header>
);
