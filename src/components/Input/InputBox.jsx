import React from 'react';

import PropTypes from 'prop-types';

import styles from './Input.module.css';

const InputBox = ({ onChange, value }) => {
	return (
		<input
			className={styles.input}
			onChange={onChange}
			placeholder='search'
			value={value}
		/>
	);
};

InputBox.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default InputBox;
