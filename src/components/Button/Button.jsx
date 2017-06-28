import React from 'react'
import styles from './styles.sass'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div className={styles.wrap}>

        <a onClick={this.handleClick.bind(this)}>
          <span className={this.state.open ? styles.active : styles.element }>
            {this.props.name}
          </span>
        </a>

      </div>
    )
  }
}
