import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from ".//StudentList";
import Newentrymodal from "./Newentrymodal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URL).then((res) =>
      this.setState({
        students: res.data,
      })
    );
  };

  resetState = () => {
    this.getStudents();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StudentList
              students={this.state.students}
              resetState={this.resetState}
            ></StudentList>
          </Col>
        </Row>
        <Row>
          <Col>
            <Newentrymodal
              create={true}
              resetState={this.resetState}
            ></Newentrymodal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
