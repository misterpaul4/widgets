import React, { Component } from "react";

class Dropdown extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  onDropdownSelect = e => this.props.onSelectChange(e.target.value);

  render() {
    const renderDropdownItems = this.props.options.map(option => {
    return (
      <React.Fragment key={option.value}>
        {
          (option.value !== this.props.currentValue || option.value === "") ?
          <option onClick={this.onDropdownSelect} value={option.value}>{option.label}</option>
          : null
        }
      </React.Fragment>
    )
  
  });
    
    const selected = this.props.currentValue ? <span><strong style={{color: this.props.currentValue}}>text is {this.props.currentValue}</strong></span> : null

    return (
      <div>
        <select onSelect={this.onDropdownSelect} className="ui dropdown">
          {renderDropdownItems}
        </select>

        <div className="top-space">{selected}</div>
      </div>
    )
  }
}

export default Dropdown;
