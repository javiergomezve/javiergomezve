import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`{
      allDataJson {
        nodes {
          data {
            courses {
              title
              progress
            }
          }
          id
        }
      }}`);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis cursos</h2>

                    <div className="flex mt-8">
                        {data.allDataJson.nodes.map(certificated => (
                            certificated.data.courses.map(item => (
                                <div className="shadow p-8 bg-white mr-4">
                                    <h4 className="font-bold">{item.title}</h4>
                                    <div className="text-center">
                                        <span className="inline-block bg-yellow-800 text-yellow-300 p-2 mt-2 radius">
                                            Calificación: {item.progress}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
