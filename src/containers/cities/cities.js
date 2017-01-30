import React, {Component} from 'react';
import $ from 'jquery';

export default class Cities extends Component {

  CITY_BIKES_API_ENDPOINT = 'http://api.citybik.es/v2/networks';

  state = {
    networkList: [],
  };

  componentDidMount() {
    $.get(this.CITY_BIKES_API_ENDPOINT).then(
      response => this.setState({networkList: response.networks})
    );
  }

  render() {
    return <div>
      <h2>Cities List</h2>
      {this.state.networkList.map(network => <div>{network.location.city}</div>)}
    </div>
  }

}
