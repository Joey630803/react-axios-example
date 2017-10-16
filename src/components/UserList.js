import React, { Component } from 'react';
import axios from 'axios'
class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading:true,
      users:null
    };
  }

  componentWillReceiveProps(nextProps)  {
    let searchName = nextProps.searchName
    const url = `https://api.github.com/search/users?q=${searchName}`;
    axios.get('https://api.github.com/search/users?q='+searchName)
      .then((response) => {
        let Data=response.data.items
        this.setState({ loading: false, users:Data  })
      })
      .catch((error)=>{
        console.log(error)
      })
    

  }


  render() {
      const {loading,users}=this.state
      if(loading){
        return  <p>loading...</p>
      }else if(users){
        console.log(this.state.users)
        
      return(
      <div className="row">
        
        {
          
          users.map((user,index) => {
            return (
            <div className="card" key={user.html_url}>
              <a href={user.html_url} target="_blank">
                <img src={user.avatar_url} style={{width: '100px'}}/>
              </a>
              <p className="card-text">{user.login}</p>
            </div>
            )
          })   
        }
      </div>
    );
  }
}
  }

export default UserList;
