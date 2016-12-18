import React, { Component } from 'react';
import {connect} from 'react-redux';
import {togglePopupActivity} from '../actions/actions';
var Modal = require('react-modal');

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
	}
};

class ModalPopup extends Component {

	constructor(args) {
		super(...args);
	}

	afterOpenModal = () => {
		this.refs.subtitle.style.color = '#f00';
	};

	closeModal = () => {
		this.props.togglePopupActivity();
	};

	render() {
		return (
			<Modal
				isOpen={this.props.popupPart.popupActivity}
				onAfterOpen={this.afterOpenModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 ref="subtitle">Hello</h2>
				<button onClick={this.closeModal}>close</button>
				<div>I am a modal</div>
			</Modal>
		);
	}
}

export default connect(
	state => ({
		popupPart: state.popupPart
	}),
	{togglePopupActivity}
)(ModalPopup);