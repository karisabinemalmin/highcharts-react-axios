import React from 'react';
import styles from './App.sass';
import axios from 'axios'
import Chart from '../Chart/Chart.jsx'; // Component
import Map from '../Map/Map.jsx'; // Component

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      scores: [],
      titles: [],
      subject: 'atom',
      clicked: false,
      // selectedOption: 'bar',
      selectedPanel: ''
    };
  }

  handleSlide(e) {
    this.setState({
      selectedPanel: e.target.value,
    })
  }

  handleClose(e) {
    this.setState({
      selectedPanel: null
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
        <Chart
          title="Statistikk"
          stacking="true"
          dataName="Comments"
          dataName2="Scores"
          type="bar" // pie, bar, column, line
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
          yAxis={this.state.titles}
          handleSlide={this.handleSlide.bind(this)}
          handleClose={this.handleClose.bind(this)}
          selectedPanel={this.state.selectedPanel}
          datagrunnlag={this.state.titles[0]}
        />

        <br />

        <Chart
          title="Statistikk2"
          stacking="true"
          dataName="Comments"
          dataName2="Scores"
          type="line" // pie, bar, column, line
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
          yAxis={this.state.titles}
          handleSlide={this.handleSlide.bind(this)}
          handleClose={this.handleClose.bind(this)}
          selectedPanel={this.state.selectedPanel}
          datagrunnlag={this.state.titles[0]}
        />

        <br />

        <Chart
          title="Statistikk3"
          stacking="true"
          dataName="Comments"
          dataName2="Scores"
          type="column" // pie, bar, column, line
          data={this.state.comments}
          data2={this.state.scores}
          xAxis={this.state.titles}
          yAxis={this.state.titles}
          handleSlide={this.handleSlide.bind(this)}
          handleClose={this.handleClose.bind(this)}
          selectedPanel={this.state.selectedPanel}
          datagrunnlag={this.state.titles[0]}
        />

      </div>
    );
  }
}
