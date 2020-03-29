import React, {useState, useEffect} from 'react';

import Repo from './Repo';

export default () => {

    const [reposCount, setReposCount] = useState(0);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        let myRepos = [];

        const data = sessionStorage.getItem('repos');

        if (data) {
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1, 13);
            return setRepos(myRepos);
        }

        const fetchRepos = async () => {
            const response = await fetch("https://api.github.com/users/javiergomezve/repos");

            myRepos = await response.json();

            setReposCount(myRepos.length);

            sessionStorage.setItem("repos", JSON.stringify(myRepos));

            setRepos(myRepos);
        };

        fetchRepos();

    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
                <p>Colaboración y contribución en código</p>
            </header>

            <ul className="repos-list">
                {repos.map(repo => <Repo repo={repo} key={repo.id} />)}
            </ul>

            <div className="mt-8 text-center">
                <a className="btn" href="https://github.com/javiergomezve" target="_blank" rel="noopener noreferrer">
                    Ver más en GitHub ({reposCount})
                </a>
            </div>
        </div>
    );
}
