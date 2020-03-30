import React from 'react';
import {Link} from 'gatsby';

export default () => (
    <footer className="bg-yellow-900 text-yellow-300 mt-5 p-5">
        <p className="font-bold mb-4">Javier Gómez</p>

        <nav className="flex flex-row">
            <ul className="mr-4">
                <li>
                    <Link to={`/`}>Inicio</Link>
                </li>
                <li>
                    <Link to={`/acerca`}>Acerca</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="//twitter.com/javiergomezve">Twitter</a>
                </li>

                <li>
                    <a href="//github.com/javiergomezve">GitHub</a>
                </li>
            </ul>
        </nav>
    </footer>
);
