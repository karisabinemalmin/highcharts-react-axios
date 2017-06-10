import React from 'react'
import styles from './styles.sass'
import Highcharts from 'highcharts'

export default class Charts extends React.Component {
  componentDidUpdate() {
    Highcharts.chart(this.props.title, {
      "chart": {
        "type": this.props.type,
        zoomType: 'xy'
      },
      "title": {
        "text": this.props.title
      },
      "xAxis": {
        "categories": this.props.xAxis
      },
      tooltip: {
          pointFormat: `${this.props.dataName}: <b>{point.percentage:.1f}%</b>`
      },
      plotOptions : {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          },
          showInLegend: true
        }
      },
      "series": [
        {
          "name": this.props.dataName,
          "data": this.props.data
        }, {
          "name": "Score",
          "data": this.props.data2
        }
      ]
    })
  }

  render() {
    return (
      <div className={styles.highcharts}>
        <div id={this.props.title}></div>
      </div>
    )
  }
}
