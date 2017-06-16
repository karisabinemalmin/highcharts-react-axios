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
      yAxis: {
          min: 0,
          title: {
              text: 'Total fruit consumption'
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
