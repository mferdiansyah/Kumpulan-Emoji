import React from 'react';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Emojis.module.css';
import EmojisBox from '../EmojisBox/EmojisBox';
import Empty from '../Empty/Empty';

import { filterEmojis } from '../../utils/filterEmojis';

const Emojis = ({ emojisData, searchText }) => {
	const [filteredEmojis, setFilteredEmojis] = useState([]);

	useEffect(() => {
		setFilteredEmojis(
			filterEmojis({
				emojisData,
				searchText,
			}),
		);
	}, [emojisData, searchText]);

	if (filteredEmojis.length > 0) {
		return (
			<div className={styles.emojisGrid}>
				{filteredEmojis.map((data, index) => (
					<EmojisBox key={index} title={data.title} symbol={data.symbol} />
				))}
			</div>
		);
	} else {
		return <Empty text='Oops, Keywords Tidak Cocok...' />;
	}
};

Emojis.propTypes = {
	emojisData: PropTypes.array,
	searchText: PropTypes.string,
};

export default Emojis;
