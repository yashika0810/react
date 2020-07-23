import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class Newentryform extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    document: "",
    phone: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = (e) => {
    e.preventDefault();
    axios.post(API_URL, this.state).then((res) => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <Form onSubmit={this.createStudent}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Document:</Label>
          <Input
            type="text"
            name="document"
            onChange={this.onChange}
            value={this.state.document}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.state.phone}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default Newentryform;
