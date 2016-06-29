import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/index';
import SB from '../components/SearchBar';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: 'Sydney',
      cc: 'AU'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchRestaurants(this.state.term, this.state.cc);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onSelectChange(e) {
    this.setState({
      cc: e.target.value
    })
  }

  onFormSubmit(e) {

    const { fetchRestaurants } = this.props;

    e.preventDefault();
    //Fetch weather with state value 'term'
    fetchRestaurants(this.state.term, this.state.cc, false);
    // empty state
    this.setState({term: ''});
  }

  render() {
    return (
      <SB
        onSelectChange={this.onSelectChange}
        onInputChange={this.onInputChange}
        onFormSubmit={this.onFormSubmit}
        term={ this.state.term }
        cc={ this.state.cc }

        {...this.props} />
    )
  }
}

export default connect(null, { fetchRestaurants })(SearchBar);
