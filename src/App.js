import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Emojis from './components/Emoji/Emojis';
import Empty from './components/Empty/Empty';
import NavBar from './components/NavBar/NavBar';
import InputBox from './components/Input/InputBox';

function App() {
	const [emojisData, setEmojiData] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchEmojis() {
			setLoading(true);
			try {
				const res = await axios.get(
					'https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28',
				);
				setEmojiData(res.data);
				setLoading(false);
			} catch (error) {
				console.error(error);

				setError(true);
				setLoading(false);
			}
		}
		fetchEmojis();
	}, []);

	const handleSearchEmojis = (event) => {
		setSearchText(event.target.value);
	};

	return (
		<>
			<NavBar />
			<Container>
				<InputBox onChange={handleSearchEmojis} value={searchText} />

				{loading && <Empty text='Loading...' />}
				{error && <Empty text='Error!' />}
				{emojisData.length > 0 && (
					<Emojis emojisData={emojisData} searchText={searchText} />
				)}
			</Container>
		</>
	);
}

export default App;
