import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWordsList, checkTranslate, clearTranslateArray} from '../actions/actions';
import Card from './Card';

class CardList extends Component {

	getWords = () => {
		this.props.getWordsList();
	};

	componentWillMount = () => {
		this.getWords();
	};

	updateWords = () => {
		this.props.clearTranslateArray();
		this.getWords();
	};

	checkTranslate = (defaultWord, userWord, counter) => {
		this.props.checkTranslate(defaultWord, userWord, counter);
	};

	render() {
		const {wordsPart} = this.props;
		return (
				<div>
					<ul className="cardList">
						{wordsPart.wordsArray.map((item, index) =>
								<Card
										translateFunc={this.checkTranslate}
										dataCorrectAnswer={wordsPart.successTranslateArray[index]}
										dataIndex={index}
										key={item.id}
										dataItem={item}>

								</Card>
						)}
					</ul>
					<button onClick={this.updateWords}>Update Words</button>
				</div>
		);
	}
}

export default connect(
	state => ({
		wordsPart: state.wordsPart
	}),
	{getWordsList, checkTranslate, clearTranslateArray}
)(CardList);