import React, { Component } from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

export default class RestaurantList extends Component {

  componentWillUpdate(nextProps) {
    if(this.refs[nextProps.selectedRestaurant.id]) {
      scrollIntoViewIfNeeded(this.refs[nextProps.selectedRestaurant.id], false, {
        duration: 500,
        easing: 'easeOut'
      });
      this.refs[nextProps.selectedRestaurant.id].style.backgroundColor = '#dafbb7';
      this.refs[this.props.selectedRestaurant.id].style.backgroundColor = '#fff';
    }
  }

  render() {
    const list = this.props.restaurants.map((restaurant, index) => {

      const bgColor = this.props.selectedRestaurant.id === restaurant.id ? '#dafbb7' : '#fff';

      return (
        <div key={restaurant.id}>
          <div
            style={{ backgroundColor: bgColor }}
            ref={restaurant.id}
            onClick={() => {
              this.props.selectRestaurant(restaurant.id, restaurant.location.coordinate)}}
              className="card">
            <div className="card-block" style={{cursor: 'pointer'}}>
              <div className="media">
                <a className="media-left" href="#">
                  <img className="media-object" src={restaurant.image_url} alt="Generic placeholder image"/>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">{restaurant.name}</h4>
                  {restaurant.snippet_text && restaurant.snippet_text}
                  {restaurant.display_phone && <p>Tel: <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a></p>}
                  <a href="#" className="btn btn-primary">Get Directions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="restaurant-list">
        {list}
      </div>
    );
  }
};

export default RestaurantList;
