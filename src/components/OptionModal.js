import React from "react";
import Modal from "react-modal";

export default class OptionModal extends React.Component {
  componentDidMount() {
    Modal.setAppElement("body");
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={this.props.handleClearSelectedOption}
        contentLabel="Selected Option"
      >
        <h3>Selected Option</h3>
        {this.props.selectedOption && <p>{this.props.selectedOption}</p>}
        <button onClick={this.props.handleClearSelectedOption}>OK</button>
      </Modal>
    );
  }
}
