import React, { Fragment } from 'react';

const Cars = props => (
	<Fragment>
		<p>Name: {props.name}</p>
		<p>Price: ${props.price}</p>
		<button onClick={props.incrementPrice}>&#43; $1</button>
		<button onClick={props.decrementPrice}>&#45; $1</button>
	</Fragment>
);
export default Cars;
