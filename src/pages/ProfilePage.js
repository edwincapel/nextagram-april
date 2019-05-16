import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Loader from '../images/giphy.gif'

export default class ProfilePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    const {user} = this.props

    if (user) {
      return (
        <>
          <Container fluid className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
              <p>this is user {user.id}</p>
            </Row>
          </Container>
        </>
      )
    }
    return (
      <>
        <Container fluid className="h-100">
          <Row className="h-100 justify-content-center align-items-center">
            <img src={Loader} alt=""/>
          </Row>
        </Container>
      </>
    ) 
  }
}
