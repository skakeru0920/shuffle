import React, { useState } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [shuffled, setShuffled] = useState([]);

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};

	const handleShuffle = () => {
		const lines = text.split('\n').filter((line) => line.trim() !== '');
		const shuffledLines = shuffleArray(lines);
		setShuffled(shuffledLines);
	};

	return (
		<div className="main">
			<h1>発表順</h1>
			<textarea
				value={text}
				onChange={handleTextChange}
				placeholder="名前を入力してください"
				rows="10"
				cols="30"
			/>
			<div>
				<button onClick={handleShuffle}>並び替え</button>
			</div>
			<h2>出力結果:</h2>
			<div className="results">
				{shuffled.map((name, index) => (
					<div key={index} className="result-item">
						{index + 1}番目: {name}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
