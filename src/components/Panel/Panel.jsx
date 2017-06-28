import React from 'react'
import styles from './styles.sass'

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selectedDropdown,
      checked: false
    }
  }

  handleSlide(e) {
    this.props.handleSlide(e)
    this.setState({
      selected: e.target.value,
      checked: !this.state.checked
    })
  }

  handleClose(e) {
    this.props.handleClose(e)
    this.setState({
      checked: this.props.selectedDropdown === this.props.title
    })
  }

  render() {
    let selected = this.props.selectedDropdown === this.props.title

    let checkbox = null;
    if (selected) {
      checkbox =  <input
                  onClick={this.handleClose.bind(this)}
                  value={this.props.title}
                  name="datagrunnlag"
                  type="checkbox"
                  checked={this.state.checked}
                />;
    } else {
      checkbox =  <input
                  onChange={this.handleSlide.bind(this)}
                  value={this.props.title}
                  name="datagrunnlag"
                  type="checkbox"
                  checked={selected}
                />
    }

    return (
      <div>

        <label>
          {checkbox} Datagrunnlag
        </label>

        <div className={selected
          ? styles.panelVisible
          : styles.panelHidden}>
          <h2>Datagrunnlag for «{this.props.title}»</h2>
          {this.props.datagrunnlag}
        </div>

      </div>
    )
  }
}
