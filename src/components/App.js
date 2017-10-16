import React, { Component } from 'react';
import Search from './Search';
import UserList from './UserList';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      searchName:''
    }

  }

  setSearchName=(searchName)=>{
    this.setState({searchName})
  }
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Welcome to Search</h3>
          <Search setSearchName={this.setSearchName}/>
        </section>
        <UserList searchName={this.state.searchName}/>
      </div>
    );
  }
}

