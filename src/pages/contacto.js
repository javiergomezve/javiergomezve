import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default () => (
    <div>
        <Nav/>

        <header className="py-5 md:py-12 border-yellow-500 border-solid border-t-8">
            <h2 className="text-6xl font-bold mx-5">Contacto</h2>
        </header>

        <section className="max-w-4xl mx-5">
            <p className="text-xl">
                Ponte en contacto, estare encantado de ayudarte.
            </p>

            <a href="mailto:javiergomezve@gmail.com">
                javiergomezve@gmail.com
            </a>
        </section>

        <section className="max-w-4xl mx-5 py-5 md:py-12">
            <form name="contact" method="post" className="mt-16 text-center" data-netlify="true">
                <label htmlFor="contact-content" className="block text-gray-700 text-sm font-bold mb-5">
                    Cúentame de esa idea que quieres hacer realidad:
                </label>

                <label htmlFor="contact-content" className="block text-red-700 text-sm font-bold mb-5">
                    Todos los campos son obligatorios
                </label>

                <div className="flex shadow rounded bg-white border p-2 my-4">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required={true}
                        placeholder="Nombre"
                        className="flex-1 py-2px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex shadow rounded bg-white border p-2 my-4">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required={true}
                        placeholder="Correo Electrónico"
                        className="flex-1 py-2px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="flex shadow rounded bg-white border p-2 my-4">
                    <textarea
                        id="message"
                        name="message"
                        required={true}
                        placeholder="Mensaje"
                        className="flex-1 py-2px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    />
                </div>

                <button className="btn ml-4">Enviar</button>
            </form>
        </section>

        <Footer/>
    </div>
);
