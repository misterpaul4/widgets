import React, { Component } from "react";

class Dropdown extends Component {
  // eslint-disable-next-line no-useless-constructor

  onDropdownSelect = e => {
    this.props.onSelectChange(e.target.value);
  }

  render() {
    const renderDropdownItems = this.props.options.map(option => {
    return (
      <React.Fragment key={option.value}>
        {
          (option.value !== this.props.currentValue) ?
          <option value={option.value}>{option.label}</option> :
          <option disabled value={option.value}>{option.label}</option>
        }
      </React.Fragment>
      )});
    
    return (
      <div>
        <label className="text-capitalize">{this.props.label}</label> <br></br>
        <select className="ui dropdown top-space" value={this.props.currentValue} onChange={this.onDropdownSelect}>
          {renderDropdownItems}
        </select>
      </div>
    )
  }
}

export default Dropdown;
