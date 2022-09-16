import React from 'react';
import { useStyles } from './style';
// import { useI18n } from '../../hooks/useI18n';

interface ErrorProps {
  errorMessage: string;
}

const Error = (props: ErrorProps) => {
	const classes = useStyles();

	return (
		<div className={classes.errorContainer}>
			<strong>{props.errorMessage ? props.errorMessage : 'Something went wrong!'}
			</strong>
		</div>
	);
};

export default Error;