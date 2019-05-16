import React,{Component} from 'react';
import './App.css';
import axios from 'axios'
import {Switch,Route} from "react-router-dom"

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then((response) => {
      // handle success
      this.setState({
        users: response.data
      })
    })
    .catch((error) =>{
      // handle error
    })
  }

  render(){
    const {users} = this.state
    return (
      <>
      <Switch>
        {/* these are good */}
        <Route
          exact path="/"
          render =  {props => 
            <HomePage {...props} 
              users={users} 
            />
          }
        />
        <Route
          path="/user/:id"
          render = {props => 
            <ProfilePage 
              {...props} 
              user={users.find(u => u.id === parseInt(props.match.params.id))}
            />
          }
        />
      </Switch>
      </>
    )
  }
}
