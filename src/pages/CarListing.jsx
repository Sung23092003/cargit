import React from "react";
// import { Container, Row, Col } from "reactstrap";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import PickupDropbox from "../components/UI/pickupAndDropoff";
import Sidebar from "../components/UI/siderBar"; 


const CarListing = () => {
  return (
    <Helmet title="Cars">
      <section>
        <Container>
          {/*Pickup and Drop-off */}
          <Row className="mb-5">
            <Col lg="12">
              <PickupDropbox /> 
            </Col>
          </Row>

          <Row>
            {/* Thêm Sidebar ở bên trái */}
            <Col lg="3" md="4" className="sidebar-col">
              <Sidebar />
            </Col>

            {/* Phần còn lại cho các CarItem */}
            <Col lg="9" md="8">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>

              <Row>
                {carData.map((item) => (
                  <CarItem item={item} key={item.id} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;