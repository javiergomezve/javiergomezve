import React from 'react';
import { graphql, Link } from 'gatsby';
import EducationNav from '../components/EducationNav';

export default ({data}) => {
    const pageData = data.educationJson;

    return (
        <div>
            <header className="py-12 border-yellow-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to={`/`} className="uppercase underline text-orange-500">
                        Regresar al inicio
                    </Link>

                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>

                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>

            <ul>
                {pageData.items.map((item, index) => (
                    <li className="bg-white shadow mt-4 flex" key={index}>
                        <p className="vertical-text">{pageData.slug}</p>

                        <div className="flex items-center flex-1 p-8">
                            <h3>{item.name}</h3>

                            {item.degree && <span className="inline-block p-2 redius bg-yellow-100 text-yellow-700">
                                {item.degree}</span>}

                            {item.url && <a href={item.url} className="btn mt-4 inline-block" target="_blank" rel="noopener noreferrer">
                                {item.url}</a>}
                        </div>

                        <div className="inline-block">
                            <span className="inline-block p-2 text-2xl bg-orange-100 text-yellow-700">
                                {item.score}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            <EducationNav/>
        </div>
    );
}

export const query = graphql`
    query($slug: String) {
        educationJson(slug: {eq: $slug}) {
            title
            description
            items {
                name
                degree
                score
                url
            }
        }
    }
`;
