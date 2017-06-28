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
      subject: 'atom',
      clicked: false,
      selectedOption: 'bar',
      selectedDropdown: ''
    };
  }

  handleSlide(e) {
    console.log('handleslide from app', e.target.value)
    this.setState({
      selectedDropdown: e.target.value,
    })
  }

  handleClose(e) {
    this.setState({
      selectedDropdown: ''
    })
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  componentDidMount() { // Get data
    const subject = this.state.subject
    axios.get(`https://www.reddit.com/r/${subject}.json`)
      .then(res => {
        const comments = res.data.data.children.slice(0, 5).map(obj => obj.data.num_comments);
        const scores = res.data.data.children.slice(0, 5).map(obj => obj.data.score);
        const titles = res.data.data.children.slice(0, 5).map(obj => obj.data.title);
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

        Selected dropdown: {this.state.selectedDropdown} <br />

        <br />

        <Chart
          selectedOption={this.state.selectedOption}
          title="Statistikk"
          stacking="true"
          dataName="Comments"
          type="bar" // pie, bar, column, line
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
          yAxis={this.state.titles}
          handleSlide={this.handleSlide.bind(this)}
          handleClose={this.handleClose.bind(this)}
          selectedDropdown={this.state.selectedDropdown}
          datagrunnlag={this.state.titles[0]}
        />

        <br />

        <Chart
          selectedOption={this.state.selectedOption}
          title="Scatter"
          dataName="Chart 2"
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
          handleSlide={this.handleSlide.bind(this)}
          handleClose={this.handleClose.bind(this)}
          selectedDropdown={this.state.selectedDropdown}
          datagrunnlag={this.state.titles[1]}
        />

        {/* <div style={{'width': '50%', 'display': 'inline-block'}}>
          <Chart
            title="Reddit data 1"
            type="column" // pie, bar, column, line
            dataName="Comments"
            data={this.state.comments}
            data2={this.state.scores}
            xAxis={this.state.titles}
          />
        </div> */}


        {/* <Chart
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
 */}

 <br/>
        {/* <Map
          title="Norway"
          data={mapdata}
        /> */}

      </div>
    );
  }
}
