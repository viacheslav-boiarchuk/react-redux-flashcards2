import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import CardList from './components/CardList';
import ModalPopup from './components/Modal';

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<CardList />
					<ModalPopup />
				</div>
			</Provider>
		);
	}
}

window.store = store;

export default App;
