import React from 'react'
import styles from './styles.sass'
import Highcharts from 'highcharts/highmaps'
import norway from './norway.json'

export default class Maps extends React.Component {
  componentDidMount() {
    Highcharts.mapChart(this.props.title, {
      chart: {
        map: norway,
        height: 800
      },
      title: {
        text: this.props.title
      },
      mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      colorAxis: {
        tickPixelInterval: 100
      },
      tooltip: {
        backgroundColor: 'none',
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        padding: 0,
        pointFormat: `
            <h2>{point.name}</h2>
            <span style="font-size:30px">
              {point.value}
            </span>`,
        positioner: function() {
          return {x: 200, y: 200};
        }
      },
      series: [
        {
          data: this.props.data,
          name: 'Random data',
          states: {
            hover: {
              color: 'pink'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      ]
    });
  }

  render() {
    return (
      <div className={styles.highcharts}>
        <div id={this.props.title}></div>
      </div>
    )
  }
}
