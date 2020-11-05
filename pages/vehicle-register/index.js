import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import React, { useState } from "react";
import RegisterForm from "../../components/vehicle-register/registerForm";
import EditForm from "../../components/vehicle-register/editForm";
import Navigation from "../../components/navigation";
const VehicleRegister = () => {
  var [currentForm, setForm] = useState(<RegisterForm />);
  var [selectedForm, setSelectedForm] = useState("1");

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs="2">
            <Navigation />
          </Col>
          <Col xs="10">
            <Row>
              <Col>
                <Jumbotron className="py-3 mt-3">
                  <h3>Vehicle Registry</h3>
                  <p>
                    A place where you can register vehicles permitted to enter
                    the vicinity
                  </p>
                </Jumbotron>
              </Col>
            </Row>
            <Row className="flex-column">
              <Row>
                <Col>
                  <ButtonGroup toggle>
                    <ToggleButton
                      variant="secondary"
                      type="radio"
                      name="actionToggle"
                      value="1"
                      checked={selectedForm === "1"}
                      onChange={(e) => {
                        setForm(<RegisterForm />);
                        setSelectedForm(e.currentTarget.value);
                      }}
                    >
                      Register Vehicle
                    </ToggleButton>
                    <ToggleButton
                      variant="secondary"
                      type="radio"
                      name="actionToggle"
                      value="2"
                      checked={selectedForm === "2"}
                      onChange={(e) => {
                        setForm(<EditForm />);
                        setSelectedForm(e.currentTarget.value);
                      }}
                    >
                      Manage Vehicle
                    </ToggleButton>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                {" "}
                {/*This is the field area*/}
                {currentForm}
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default VehicleRegister;
