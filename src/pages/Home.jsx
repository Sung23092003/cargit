import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import Header from '../components/Header/Header.jsx';
import Slider from '../components/Slider/Slider.jsx';


const Home = () => {
  return (
    <Helmet title="Home">
     
     <div>
        <div className="white-gradient"/>
        <Slider/>
        {/* <Footer/> */}
      </div>
    </Helmet>
  );
};

export default Home;
