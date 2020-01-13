import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleAction(id, action) {
    // Emit from parent.
    this.props.handleAction(id, action);
  }

  handleClick(e) {
    if (e.target === e.currentTarget) {
      this.handleAction(this.props.id, "CANCEL");
    }
  }

  render() {
    return (
      <div
        className="modal-container"
        onClick={ this.handleClick }
      >
        <div className="modal-content">
          <h3>MODAL HEADER</h3>
          <p className="modal-content ">MODAL BODY</p>
          <div className="actions">
            <button onClick={() => this.handleAction(this.props.id, "CONFIRM")}>
              Confirm
            </button>
            <button onClick={() => this.handleAction(this.props.id, "CANCEL")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
