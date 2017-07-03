import React from 'react'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting.src'
Exporting(Highcharts)

import Panel from '../Panel/Panel.jsx';

import 'react-widgets/lib/scss/react-widgets.scss';
import DropdownList from 'react-widgets/lib/DropdownList';

const colors = [
  'line', 'pie', 'bar'
];

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: this.props.type,
    }
  }

  handleSelect(changeEvent) {
    this.setState({
      selectedType: changeEvent.target.value
    })
  }

  dropdownChange(changeEvent) {
    this.setState({
      selectedType: changeEvent,
    })
  }

  componentDidUpdate() {
    new Highcharts.chart(this.props.title, {
      "colors": [
        '#f6c034',
        '#7e9b40',
        '#809ba0',
        '#117eb4',
        '#79006c',
        '#7e9b40',
        '#574319',
      ],
      "chart": {
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
      "series": [{
          "name": this.props.dataName,
          "data": this.props.data
        }, {
          "name": this.props.dataName2,
          "data": this.props.data2
      }]
    })
  }

  render() {
    return (
      <div className="highchart">

        <DropdownList
          onChange={this.dropdownChange.bind(this)}
          defaultValue={this.state.selectedType}
          data={colors} />

        <div id={this.props.title}></div>

        <Panel
          title={this.props.title}
          datagrunnlag={this.props.datagrunnlag}
          selectedPanel={this.props.selectedPanel}
          handleSlide={this.props.handleSlide.bind(this)}
        />

      </div>
    )
  }
}
