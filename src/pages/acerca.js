import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Experience from '../components/Experience';

const experience = [
    {
        position: 'Standar Developer',
        company: 'CCxC – Centro de Consultoría para la Competitividad',
        description: 'Desarrollo de herramientas financieras para ayudar al sector de micro empresas con su control de gastos. Creación de un chat de soporte y ayuda en linea.',
    },
    {
        position: 'Backend Developer',
        company: '261ITSolutions',
        description: 'Uso de los SDK en PHP de EC2, ElastiCache y RDS para integrar información de los servicios activos en AWS, en un panel administrativo. Uso del SDK de PHP para integrar información de las maquinas virtuales activas en Azure. Desarrollo de API Rest en Symfony 3.',
    },
    {
        position: 'Front-end Developer',
        company: 'Sistemas Integrales de TI',
        description: 'Desarrollo de SPA enfocada al archivado de documentos: desarrollo de interfaces de usuario con directivas/componentes personalizados. Apoyo en la toma de decisiones de UI, UX y Back-end para lograr resultados óptimos',
    },
];

export default () => (
    <div>
        <Nav/>

        <header className="py-5 md:py-12 border-yellow-500 border-solid border-t-8">
            <h2 className="text-6xl font-bold mx-5">Acerca de mi</h2>
        </header>

        <section className="max-w-4xl mx-5">
            <p className="text-xl">
                Soy un desarrollador web y móvil, con varios años de experiencia en el mercado. En este tiempo me
                formé en diferentes tecnologías con un solo objetivo, obtener los resultados más eficientes y
                óptimos en cada proyecto. Me apasiona el desarrollo de software, participé en el proceso de
                desarrollo de diferentes aplicaciones, obteniendo muy buenos resultados. Me encanta trabajar en
                tecnologías como <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>Java</strong> y
                varios framewoks que me permiten acelerar mi proceso de trabajo.
                Actualmente, trabajo con <strong>Laravel</strong>, <strong>ReactJs</strong>, <strong>NodeJS</strong>,
                <strong>ExpressJs</strong>, <strong>Socket.IO</strong>, <strong>Android</strong> y <strong>Swift</strong>.
            </p>
        </section>

        <section className="max-w-4xl mx-5 py-5 md:py-12">
            <h3 className="text-4xl font-bold py-4">Experiencia</h3>

            {experience.map((item, index) => <Experience experience={item} key={index}/> )}
        </section>

        <Footer/>
    </div>
);
