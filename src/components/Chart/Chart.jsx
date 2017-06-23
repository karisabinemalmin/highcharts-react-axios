import React from 'react'
import styles from './styles.sass'
import Highcharts from 'highcharts'
import Dropdown from '../Dropdown/Dropdown.jsx'; // Component

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'bar',
      dataName2: 'Hello',
    }
  }

  handleSelect(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  componentDidUpdate() {
    new Highcharts.chart(this.props.title, {
      "chart": {
        "type": this.state.selectedOption,
        zoomType: 'xy'
      },
      "title": {
        "text": this.state.selectedOption ? this.state.selectedOption : this.props.title
      },
      "xAxis": {
        "categories": this.props.xAxis
      },
      yAxis: {
        min: 0,
        title: {
          text: this.state.selectedOption ? this.state.selectedOption : this.props.title
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          }
        }
      },
      tooltip: {
        pointFormat: `${this.props.dataName}: <b>{point.percentage:.1f}%</b>`
      },
      plotOptions : {
        column: {
          stacking: this.props.stacking,
          dataLabels: {
            enabled: false,
          }
        }
      },
      "series": [
        {
          "name": this.props.dataName,
          "data": this.props.data
        }, {
          "name": this.state.dataName2,
          "data": this.props.data2
        }
      ]
    })
  }

  render() {
    return (
      <div className={styles.highchart}>

        <Dropdown
          selectedOption={this.state.selectedOption}
          handleSelect={this.handleSelect.bind(this)}
          name="Velg visning"
        />
        {/* <Dropdown
          selectedOption={this.state.selectedOption}
          handleSelect={this.props.handleSelect}
          // handleClick={this.props.handleClick}
          name="Last ned"
        />
        <Dropdown
          selectedOption={this.state.selectedOption}
          handleSelect={this.props.handleSelect}
          // handleClick={this.props.handleClick}
          name="Datagrunnlag" /> */}

        <div id={this.props.title}></div>
      </div>
    )
  }
}
