import React,{Component} from 'react';
import UserImages from '../containers/UserImages'
import { Container, Row, Col } from 'reactstrap';
import Image from "react-graceful-image";

import {Link} from 'react-router-dom'


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
                <Col md="4" className="d-flex justify-content-start align-items-center flex-column p-1">
                  <Link to={`/user/${user.id}`}>
                    <Image
                      src={user.profileImage}
                      width="150"
                      height="150"
                      alt="My awesome image"
                      placeholderColor="#fff"
                      style={imageStyle}
                    />
                  </Link>
                  <Link to={`/user/${user.id}`}>
                    <p className="mt-1 text-dark">{user.username}</p>
                  </Link>
                </Col>
                <Col md="8" className="d-flex justify-content-center flex-wrap">
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
