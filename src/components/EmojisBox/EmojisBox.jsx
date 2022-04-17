import React from 'react';

import { useState, useEffect } from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';

import styles from './EmojisBox.module.css';

const EmojisBox = ({ title, symbol }) => {
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setSelected(false), 600);

		return () => clearTimeout(timer);
	}, [selected]);

	return (
		<div
			onClick={() => {
				navigator.clipboard.writeText(symbol);
				setSelected(true);
			}}
			className={classNames(styles.emojisBox, {
				[styles.selected]: selected,
			})}>
			<p
				className={styles.emoji}
				dangerouslySetInnerHTML={{
					__html: `&#${symbol.codePointAt(0)}`,
				}}
			/>
			<p className={styles.emojisText}>{selected ? 'Copied~!' : title}</p>
		</div>
	);
};

EmojisBox.propTypes = {
	title: PropTypes.string,
	symbol: PropTypes.string,
};

export default EmojisBox;
