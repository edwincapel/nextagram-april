import React,{Component} from 'react';
import UserImages from '../containers/UserImages'
import { Container, Row, Col } from 'reactstrap';
import Image from "react-graceful-image";

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
              <Row key={user.id}>
                <Col md="4">
                  <Image 
                    src={user.profileImage} 
                    width="150px" 
                    alt=""
                  />
                  <p>{user.username}</p>
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
