import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";


const Home = () => {
  return (
    <Helmet title="Home">
     
      <section>
        <Container>
  <p>Test</p>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
