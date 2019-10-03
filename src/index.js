import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
    
//     return <div>Latitude: </div>;
// };

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        //super is a reference to the parent constructor function
        super(props);

        this.state = { lat: null };
    }
    
    
    //React requires that we have a render method
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude: {this.state.lat}</div>;
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);