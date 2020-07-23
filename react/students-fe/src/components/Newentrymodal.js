import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Newentryform from "./Newentryform";

export class Newentrymodal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  render() {
    const create = this.props.create;
    var title = "editing student";
    var button = <Button onClick={this.toggle}>Edit</Button>;

    if (create) {
      title = "Creating New record";
      button = (
        <Button
          color="primary"
          className="float=right"
          onClick={this.toggle}
          style={{ midwidth: "200px" }}
        >
          Create New record
        </Button>
      );
    }
    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}></Modal>
        <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
        <ModalBody>
          <Newentryform
            resetState={this.state.resetState}
            student={this.state.student}
            toggle={this.toggle}
          ></Newentryform>
        </ModalBody>
      </Fragment>
    );
  }
}

export default Newentrymodal;
