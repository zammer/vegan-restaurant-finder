import React, { Component } from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

export default class RestaurantList extends Component {

  selectedID = '';

  componentWillUpdate(nextProps) {
    if(this.refs[nextProps.selectedRestaurant.id]) {
      scrollIntoViewIfNeeded(this.refs[nextProps.selectedRestaurant.id], false, {
        duration: 500,
        easing: 'easeOut'
      });
    }
  }

  _renderList() {
    const { restaurants, selectedRestaurant } = this.props;
    return restaurants.map((restaurant, index) => {

      const selected = selectedRestaurant.id === restaurant.id ? 'selected' : null;

      return (
        <div key={restaurant.id}>
          <div
            ref={restaurant.id}
            onClick={() => {
              this.props.selectRestaurant(restaurant.id, restaurant.location.coordinate)}}
              className={`card ${selected}`}>
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
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div className="restaurant-list">
        { restaurants ? this._renderList() : null }
      </div>
    );
  }
};

export default RestaurantList;
