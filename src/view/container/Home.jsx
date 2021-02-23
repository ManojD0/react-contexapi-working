import React, { Fragment } from 'react';
import MyContext from '../../context/store/MyContext';
import Car from '../component/Car';
import TestPage from '../component/TestPage';

const Home = () => (
	<MyContext.Consumer>
		{context => (
			<Fragment>
				<h4>Cars:</h4>
				{Object.keys(context.cars).map(carID => (
					<Car
						key={carID}
						name={context.cars[carID].name}
						price={context.cars[carID].price}
						incrementPrice={() => context.incrementPrice(carID)}
						decrementPrice={() => context.decrementPrice(carID)}
					/>
				))}
                <TestPage/>
			</Fragment>
		)}
	</MyContext.Consumer>
);

export default Home;

