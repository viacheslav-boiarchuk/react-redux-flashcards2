import React, { Component } from 'react';

class Card extends Component {

	callTranslateFunc = (e) => {
		e.preventDefault();
		this.props.translateFunc(this.refs.defaultWord.getAttribute('data-word'), this.refs.userTranslatedWord.value, this.props.dataIndex);
	}

	render() {
		const {dataItem, dataCorrectAnswer} = this.props;
		return (
			<li className={"card-container answer-" + dataCorrectAnswer}>
				<h2 ref="defaultWord" data-word={dataItem.word}> {dataItem.word}</h2>
				<form action="" onSubmit={this.callTranslateFunc}>
					<label htmlFor="">Add Translate <br/>
						<input ref="userTranslatedWord" type="text"/>
					</label>
				</form>
			</li>
		);
	}
}

export default Card;