import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import {options, defaultLanguage} from './languageOptions';
import SearchBar from './SearchBar';
import Convert from './Convert';

export default class Translate extends Component {
  state = {
    selected: defaultLanguage,
    searchTerm: "",
    translation: "",
  }

  updatedSelected = value => this.setState({selected: value});
  updateSearchTerm = value => this.setState({searchTerm: value});
  updateTranslation = value => this.setState({translation: value});

  render() {
    const renderConvert = (this.state.searchTerm || this.state.translation) ? <Convert language={this.state.selected} searchTerm={this.state.searchTerm} updateTranslation={this.updateTranslation}   /> : null
    const displayConversion = this.state.translation ? 
    <div>
      Translation
      <h1>{this.state.translation}</h1>
    </div> :
    null
    
    return (
      <div className='ui segment'>
        <SearchBar searchTerm={this.state.searchTerm} handleInputChange={this.updateSearchTerm} />
        <div className='top-space-2'>
          <Dropdown className='top-space' options={options} label="select language" currentValue={this.state.selected} onSelectChange={this.updatedSelected} />
        </div>
        <div className='top-space-2'>
          {renderConvert}
          {displayConversion}
        </div>
      </div>
    )
  }
}
