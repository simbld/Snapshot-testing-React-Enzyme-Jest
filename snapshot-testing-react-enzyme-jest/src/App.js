import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		advice: '',
	};

	loadAdvice = async () => {
		const response = await fetch('https://api.adviceslip.com/advice');
		const {
			slip: { advice },
		} = await response.json();
		this.setState({ advice });
	};

	async componentDidMount() {
		await this.loadAdvice();
	}

	render() {
		return (
			<div className="App">
				<p className="Advice">{this.state.advice || '…'}</p>
				<button
					className="Advice-other-advice-button"
					onClick={this.loadAdvice}
				>
					Show other advice
				</button>
			</div>
		);
	}
}

export default App;
