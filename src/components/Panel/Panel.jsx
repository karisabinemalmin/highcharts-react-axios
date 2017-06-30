import React from 'react'

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selectedPanel,
    }
  }

  handleSlide(e) {
    this.props.handleSlide(e)
    this.setState({
      selected: e.target.value,
    })
  }

  render() {
    console.log(this.props.selectedpanel ? 'true' : 'false');

    let selected = this.props.selectedPanel === this.props.title

    let checkbox = null;
    if (selected) {
      checkbox = <input
                   onClick={this.props.handleClose.bind(this)}
                   value={this.props.title}
                   name="datagrunnlag"
                   type="checkbox"
                   checked={selected}
                 />
    } else {
      checkbox = <input
                   onClick={this.handleSlide.bind(this)}
                   value={this.props.title}
                   name="datagrunnlag"
                   type="checkbox"
                   checked={selected}
                 />
    }

    return (
      <div>
        {this.props.selectedpanel ? 'true' : 'false'}

        <label className={selected ? 'panel--active' : 'panel--inactive'}> {checkbox} Datagrunnlag </label>

        <div className={selected ? 'panel panel--visible' : 'panel panel--hidden'}>
          <h2>Datagrunnlag for «{this.props.title}»</h2>
          {this.props.datagrunnlag}
        </div>
      </div>
    )
  }
}
