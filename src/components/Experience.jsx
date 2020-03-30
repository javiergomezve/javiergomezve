import React from 'react';

export default ({experience}) => (
    <article>
        <h4 className="text-2xl font-bold py-2 text-yellow-900">{experience.position}</h4>

        <p className="font-bold py-1 text-yellow-700">{experience.company}</p>

        <p>{experience.description}</p>
    </article>
);
