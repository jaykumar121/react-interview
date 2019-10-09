import React from "react";
import axios from "axios";
import Map from "../components/Map";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapsCords: []
    };
  }

  componentDidMount() {
    this.fetchMapData();
  }

  fetchMapData() {
    const url = "http://localhost:12059/react-interview/getLowesStores";
    axios.get(url).then(resp => {
      this.setState({ mapsCords: resp.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.mapsCords.length ? <Map data={this.state.mapsCords}/> : null}
      </div>
    );
  }
}
