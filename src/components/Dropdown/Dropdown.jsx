import React from 'react'
import styles from './styles.sass'
import icon from './icon.svg'
import Options from '../Options/Options.jsx'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleSelect(changeEvent) {
    this.props.handleSelect(changeEvent)
    this.setState({
      selectedType: changeEvent.target.value,
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className={styles.wrap}>

        <a onClick={this.handleClick.bind(this)}>
          <span className={this.state.isOpen ? styles.active : styles.element }>
            <span className={this.state.isOpen ? styles.rotated : '' }>
              <img className={styles.icon} src={icon}/>
            </span>
            {this.props.selectedType}
          </span>
        </a>

        <div style={this.state.isOpen ? {'display': 'block'} : {'display': 'none'}}>
          <Options
            handleClick={this.handleClick.bind(this)}
            handleSelect={this.props.handleSelect}
            selectedType={this.props.selectedType}
          />
        </div>

      </div>
    )
  }
}
