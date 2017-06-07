import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/maps/Map';
import MapDescription from './components/maps/MapDescription';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
				<div className='percapita'>
	        <Map />
					<MapDescription />
				</div>
      </div>
    );
  }
}

export default App;
