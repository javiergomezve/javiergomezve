import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Service from '../components/Service';

const services = [
    {
        title: 'Diseño Web',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.',
    },
    {
        title: 'Desarrollo de Aplicaciones',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.',
    },
    {
        title: 'Administración de Servidores',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.',
    },
];

export default () => (
    <div>
        <Nav/>

        <header className="py-5 md:py-12 border-yellow-500 border-solid border-t-8">
            <h2 className="text-6xl font-bold mx-5">Servicios</h2>
        </header>


        <section className="max-w-4xl mx-5 py-5 md:py-12">
            {services.map((item, index) => <Service service={item} key={index}/> )}
        </section>

        <Footer/>
    </div>
);
