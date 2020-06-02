import React from "react";
import PopUpModal from "./popUpModal";

class Card extends React.Component {
  state = {
    modal: false,
  };

  openModal = (e) => {
    this.setState({ modal: true });
    console.log("modal status: ", this.state.modal);
  };

  closeModal = () => {
    this.setState({ modal: false });
    console.log("modal status: ", this.state.modal);
  };

  render() {
    const { id, name, height } = this.props;
    return (
      <div>
        <div className="card text-white border-warning mb-6">
          <div className="card-header">
            <span className="badge badge-light">Id: {id}</span>
            <br />
            <span className="badge badge-light">Name: {name}</span>
            <br />
          </div>
          <div className="card-body text-dark">
            <h6>pokemon img</h6>
          </div>
          <PopUpModal
            show={this.state.modal}
            close={this.closeModal}
            height={height}
          />
          <button onClick={this.openModal} className="btn btn-danger">
            Show Pokemon Stats
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
