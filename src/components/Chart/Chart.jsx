import React from 'react'
import styles from './styles.sass'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting.src'
Exporting(Highcharts)

import Dropdown from '../Dropdown/Dropdown.jsx'; // Component
import Panel from '../Panel/Panel.jsx'; // Component

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: this.props.type,
      checked: false
    }
  }

  handleSelect(changeEvent) {
    this.setState({
      selectedType: changeEvent.target.value
    })
  }

  componentDidUpdate() {
    new Highcharts.chart(this.props.title, {
      "colors": [
        '#f6c034',
        '#db4a00',
        '#809ba0',
        '#117eb4',
        '#79006c',
        '#7e9b40',
        '#574319',
      ],
      "chart": {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
            ]
        },
        "type": this.state.selectedType,
        zoomType: 'xy'
      },
      "title": {
        "text": this.props.title
      },
      "xAxis": {
        "categories": this.props.xAxis
      },
      yAxis: {
        min: 0,
        title: {
          text: this.state.selectedType ? this.state.selectedType : this.props.title
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
          "name": this.props.dataName2,
          "data": this.props.data2
        }
      ]
    })
  }

  render() {
    return (
      <div className={styles.highchart}>

        <Dropdown
          selectedType={this.state.selectedType}
          handleSelect={this.handleSelect.bind(this)}
          name="Velg visning"
        />

        <div id={this.props.title}></div>

        <Panel
          title={this.props.title}
          datagrunnlag={this.props.datagrunnlag}
          ref="datagrunnlagInput"
          selectedPanel={this.props.selectedPanel}
          handleSlide={this.props.handleSlide.bind(this)}
          handleClose={this.props.handleClose.bind(this)}
        />

      </div>
    )
  }
}
