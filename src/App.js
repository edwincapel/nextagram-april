import React,{Component} from 'react';
import './App.css';
import axios from 'axios'

import HomePage from './pages/HomePage'

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
      console.log(error);
    })
  }

  render(){
    const {users} = this.state
    return (
      <>
        <HomePage users={users} />
      </>
    )
  }
}
