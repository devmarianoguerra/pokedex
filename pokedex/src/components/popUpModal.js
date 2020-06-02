import React from "react";
import { Modal, Button } from "react-bootstrap";

class PopUpModal extends React.Component {
  render() {
    const { close } = this.props;
    const { show } = this.props;
    const { height } = this.props;
    if (!show) {
      return null;
    } else {
      return (
        <>
          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>Pokemon Stats:</Modal.Title>
              <Modal.Body>
                <span className="badge badge-light">Height: {height}</span>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-warning" onClick={close}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Header>
          </Modal>
        </>
      );
    }
  }
}

export default PopUpModal;
