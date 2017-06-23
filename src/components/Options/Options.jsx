import React from 'react'
import styles from './styles.sass'

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    }
  }

  handleClick() {
    this.props.handleClick()
  }

  handleSelect(changeEvent) {
    this.props.handleSelect(changeEvent)
    this.props.handleClick()
    this.setState({
      selectedOption: changeEvent.target.value,
    })
  }

  render() {
    return (
      <div className={styles.submenu}>

        <label><input
                onChange={this.handleSelect.bind(this)}
                ref="inputfield"
                type="radio"
                name="velg_visning"
                checked={'bar' === this.state.selectedOption}
                value="bar" />
                bar
        </label>

        <label><input
                onChange={this.handleSelect.bind(this)}
                ref="inputfield"
                type="radio"
                name="velg_visning"
                checked={'line' === this.state.selectedOption}
                value="line" />
                line
        </label>

        <label><input
                onChange={this.handleSelect.bind(this)}
                ref="inputfield"
                type="radio"
                name="velg_visning"
                checked={'column' === this.state.selectedOption}
                value="column" />
                column
        </label>

      </div>
    );
  }
}
