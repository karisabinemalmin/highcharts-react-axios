import React from 'react'
import styles from './styles.sass'

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
        <label> {checkbox} Datagrunnlag </label>

        <div className={selected ? styles.panelVisible : styles.panelHidden}>
          <h2>Datagrunnlag for «{this.props.title}»</h2>
          {this.props.datagrunnlag}
        </div>
      </div>
    )
  }
}
