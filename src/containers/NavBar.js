import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  } from 'reactstrap';

import {Link} from 'react-router-dom'

import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loginModal: false,
      signUpModal: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleLoginModal =()=> {
    this.setState(prevState => ({
      signUpModal: false,
      loginModal: !prevState.loginModal
    }));
  }

  toggleSignUpModal =()=> {
    this.setState(prevState => ({
      loginModal: false,
      signUpModal: !prevState.signUpModal
    }));
  }

  handleLogout = () => {
    localStorage.removeItem('JWT');
    localStorage.removeItem('current_user');
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <Link to='/' className="navbar-brand">Nextagram</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav >
                  <i className="fas fa-cog"></i>
                </DropdownToggle>
                <DropdownMenu right>
                {
                  localStorage.JWT
                  ? null
                  : <DropdownItem onClick={this.toggleLoginModal}>
                      Login
                    </DropdownItem>
                }
                {
                  localStorage.JWT
                  ? null
                  : <DropdownItem onClick={this.toggleSignUpModal}>
                      Sign Up
                    </DropdownItem>
                }
                {
                  localStorage.JWT
                  ? <DropdownItem onClick={this.handleLogout}>
                      Logout
                    </DropdownItem>
                  : null
                }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <LoginModal loginModal={this.state.loginModal} toggleLoginModal={this.toggleLoginModal} toggleSignUpModal={this.toggleSignUpModal}/>
        <SignUpModal signUpModal={this.state.signUpModal} toggleSignUpModal={this.toggleSignUpModal} toggleLoginModal={this.toggleLoginModal}/>
      </>
    );
  }
}