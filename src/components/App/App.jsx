import React from 'react';
import styles from './App.sass';
import axios from 'axios'
import Chart from '../Chart/Chart.jsx'; // Component
import Map from '../Map/Map.jsx'; // Component
import mapdata from './mapdata.json' // Map data

const piedata = [
  {
    name: 'Microsoft Internet Explorer',
    y: 56.33
  }, {
    name: 'Chrome',
    y: 24.03,
    sliced: true,
    selected: true
  }, {
    name: 'Firefox',
    y: 10.38
  }, {
    name: 'Safari',
    y: 4.77
  }, {
    name: 'Opera',
    y: 0.91
  }, {
    name: 'Proprietary or Undetectable',
    y: 0.2
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      scores: [],
      titles: [],
    };
  }

  componentDidMount() {
    const subject = "sass"
    axios.get(`https://www.reddit.com/r/${subject}.json`).then(res => {
      const comments = res.data.data.children.map(obj => obj.data.num_comments);
      const scores = res.data.data.children.map(obj => obj.data.score);
      const titles = res.data.data.children.map(obj => obj.data.title);
      this.setState({
        comments: comments,
        scores: scores,
        titles: titles
      });
    });
  }

  render() {
    return (
      <div className={styles.element}>

        <Chart
          title="Scatter"
          type="scatter" // pie, bar, column, line
          data={this.state.comments}
          dataName="Comments"
          data2={this.state.scores}
          xAxis={this.state.titles}
        />

        <Chart
          title="Browser market shares January, 2015 to May, 2015"
          type="pie" // pie, bar, column, line
          data={piedata}
          dataName="Brands"
        />

        <Chart
          title="Reddit data 1"
          type="column" // pie, bar, column, line
          data={this.state.comments}
          dataName="Comments"
          data2={this.state.scores}
          xAxis={this.state.titles}
        />

        <Chart
          title="Reddit data 2"
          type="bar" // pie, bar, column, line
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
        />

        <Chart
          title="Reddit data 3"
          type="line" // pie, bar, column, line
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
        />

        <Map
          title="Norway"
          data={mapdata}
        />

      </div>
    );
  }
}
