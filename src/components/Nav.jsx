import React from 'react';
import {Link} from 'gatsby';

const items = [
    {
        label: 'Inicio',
        url: `/`
    },
    {
        label: 'Acerca',
        url: `/acerca`
    },
    {
        label: 'Servicios',
        url: `/servicios`
    },
    {
        label: 'Contacto',
        url: `/contacto`
    }
];

export default () => (
    <nav className="bg-yellow-300 py-3">
        <ul className="flex">
            {items.map((item, index) => (
                <li key={index} className="mx-4">
                    <Link to={item.url} className="text-yellow-900 font-bold">
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);
