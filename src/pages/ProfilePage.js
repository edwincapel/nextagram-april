import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Loader from '../images/giphy.gif'
import Image from "react-graceful-image";
import UserImages from '../containers/UserImages'
import { Button } from 'reactstrap';


const imageStyle = {
  borderRadius : '50%'
}

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
          <Container fluid>
            <Row className="h-100 justify-content-center mt-5">
              <Col md="10" className="d-flex justify-content-center">
                <div className="">
                  <Image
                    src={user.profileImage}
                    width="150"
                    height="150"
                    alt="My awesome image"
                    placeholderColor="#fff"
                    style={imageStyle}
                  />
                </div>
                <div className="ml-3 p-2">
                  <p className="mt-1">{user.username}</p>
                  <p className="mt-1">Other info</p>
                  <Button color="info">Follow</Button>{' '}
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="justify-content-center mt-5">
              <Col md="10">
                <UserImages user_id={user.id}/>
              </Col>
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
