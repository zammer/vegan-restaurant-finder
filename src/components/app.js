import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import RestaurantList from '../containers/RestaurantList';
import GoogleMap from '../containers/GoogleMap';


export default class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <a className="navbar-brand" href="#">Vegan Restaurant Finder</a>
        </nav>
        <div className="container-fluid app-main">
          <div className="row app-row">
            <div className="col-md-6 app-map-area">
              <SearchBar />
              <GoogleMap />
            </div>
            <div className="col-md-6">
              <div className="app-restaurant-list">
                <RestaurantList />
              </div>
            </div>
         </div>
        </div>
      </div>
    );
  }
}
