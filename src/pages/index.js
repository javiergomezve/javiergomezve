import React from "react";

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Repos from '../components/Repos';
import CodigoFacilito from '../components/CodigoFacilito';
import EducationNav from '../components/EducationNav';

export default () => (
    <div>
        <Nav/>
        <Header/>
        <div className="mt-12 flex">
            <a href="/contacto" className="btn m-auto focus:border-none">¡Contactame!</a>
        </div>
        <EducationNav/>
        <Repos />
        <CodigoFacilito/>
        <Footer/>
    </div>
);
