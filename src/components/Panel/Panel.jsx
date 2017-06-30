import React from 'react'

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selected: this.props.selectedPanel,
      selected: false,
    }
  }

  handleSlide(e) {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {

    return (
      <div>
        <label className={this.state.selected ? 'panel--active' : 'panel--inactive'}>
          <input
             onClick={this.handleSlide.bind(this)}
             value={this.props.title}
             name="datagrunnlag"
             type="checkbox"
             checked={this.state.selected}
           /> Datagrunnlag
         </label>

        <div className={this.state.selected ? 'panel panel--visible' : 'panel panel--hidden'}>
          <h2>Datagrunnlag for «{this.props.title}»</h2>
          {this.props.datagrunnlag}
        </div>
      </div>
    )
  }
}
