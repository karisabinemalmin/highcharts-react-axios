import React from 'react'
import styles from './styles.sass'
import icon from './icon.svg'
import Options from '../Options/Options.jsx'

export default class Download extends React.Component {
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

  handleSelect(changeEvent) {
    this.props.handleSelect(changeEvent)
    this.setState({
      selectedOption: changeEvent.target.value,
      open: !this.state.open
    })
  }

  render() {
    return (
      <div className={styles.wrap}>

        <a onClick={this.handleClick.bind(this)}>
          <span className={this.state.open ? styles.active : styles.element }>
            <span className={this.state.open ? styles.rotated : '' }>
              <img className={styles.icon} src={icon}/>
            </span>
            {this.props.name} ({this.props.selectedOption})
          </span>
        </a>

        <div style={this.state.open ? {'display': 'block'} : {'display': 'none'}}>
          <Options
            handleClick={this.handleClick.bind(this)}
            handleSelect={this.props.handleSelect}
          />
        </div>

      </div>
    )
  }
}
