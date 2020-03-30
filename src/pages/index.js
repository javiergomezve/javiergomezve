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
        <EducationNav/>
        <Repos />
        <CodigoFacilito/>
        <Footer/>
    </div>
);
