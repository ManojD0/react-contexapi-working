import React ,{Component} from 'react'

import MyContext from '../store/MyContext';

class MyProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
        ,
        test:{id:8}

        
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    test:[     { name: 'Honda'},
                    { name: 'BMW'},
                    { name: 'Mercedes'}],
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export default MyProvider;
