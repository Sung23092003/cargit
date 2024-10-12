// import React from "react";
import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/siderBar.css";
import { FormGroup, Label, Input } from "reactstrap";

const Sidebar = () => {
    const [type, setType] = useState([]);
    const [capacity, setCapacity] = useState(0);
    const [priceRange, setPriceRange] = useState([0, 300000]);
  
    return (
      <div className="sidebar">
        <h4>Type</h4>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="sport" onChange={(e) => setType(e.target.checked ? [...type, e.target.value] : type.filter(item => item !== e.target.value))} />
            Sport
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="suv" onChange={(e) => setType(e.target.checked ? [...type, e.target.value] : type.filter(item => item !== e.target.value))} />
            SUV
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="mpv" onChange={(e) => setType(e.target.checked ? [...type, e.target.value] : type.filter(item => item !== e.target.value))} />
            MPV
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="sedan" onChange={(e) => setType(e.target.checked ? [...type, e.target.value] : type.filter(item => item !== e.target.value))} />
            Sedan
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="coupe" onChange={(e) => setType(e.target.checked ? [...type, e.target.value] : type.filter(item => item !== e.target.value))} />
            Coupe
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="hatchback" onChange={(e) => setType(e.target.checked ? [...type, e.target.value] : type.filter(item => item !== e.target.value))} />
            Hatchback
          </Label>
        </FormGroup>
  
        <h4>Capacity</h4>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="2person" onChange={(e) => setCapacity(e.target.checked ? 2 : 0)} />
            2 Person
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="4person" onChange={(e) => setCapacity(e.target.checked ? 4 : 0)} />
            4 Person
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="6person" onChange={(e) => setCapacity(e.target.checked ? 6 : 0)} />
            6 Person
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" value="8ormore" onChange={(e) => setCapacity(e.target.checked ? 8 : 0)} />
            8 or More
          </Label>
        </FormGroup>
  
        <h4>Price</h4>
        <input 
          type="range" 
          min="0" 
          max="300000" 
          value={priceRange[1]} 
          onChange={(e) => setPriceRange([priceRange[0], e.target.value])} 
        />
        <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>
      </div>
    );
  };
  
  export default Sidebar;