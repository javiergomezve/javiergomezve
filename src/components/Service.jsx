import React from 'react';

export default ({service}) => (
    <article>
        <h4 className="text-2xl font-bold py-2 text-yellow-900">{service.title}</h4>

        <p>{service.description}</p>
    </article>
);
