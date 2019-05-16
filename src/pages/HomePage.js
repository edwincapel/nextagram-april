import React,{Component} from 'react';
import UserImages from '../containers/UserImages'
import { Container, Row, Col } from 'reactstrap';
import Image from "react-graceful-image";

const imageStyle = {
  borderRadius : '50%'
}

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    const {users} = this.props
    return (
      <>
        <Container fluid>
          {
            users.map(user =>
              <Row key={user.id} className="mt-3">
                <Col md="4" className="d-flex justify-content-center align-items-center flex-column">
                  <Image
                      src={user.profileImage}
                      width="150"
                      height="150"
                      alt="My awesome image"
                      placeholderColor="#fff"
                      style={imageStyle}
                  />
                  <p className="mt-1 text-dark">{user.username}</p>
                </Col>
                <Col md="8">
                  <UserImages user_id={user.id}/>
                </Col>
              </Row>  
            )
          }
        </Container>
      </>
    )
  }
}
