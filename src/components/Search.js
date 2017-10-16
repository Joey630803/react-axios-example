import React, { Component } from 'react';
class Search extends Component {
  handleClick=()=>{
    const searchName=this.refs.searchName.value.trim()
    if(searchName===''){
      return
    }
    this.props.setSearchName(searchName)
  }  
  render() {
    return (
      <div>
        <input type="text" placeholder="search it" ref="searchName"/>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;
