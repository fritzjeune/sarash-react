import React, { Component } from 'react';
// COMPONENTS
import Navbar from './navbar';
import { UserLogo, HamburgerIcon, CartIcon } from './icons';
import logo from '../images/sarash-logo.jpeg';


class Header extends Component {

    state = {
        active: false
    };

    navEventhandler = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };


    componentDidMount() {
        
    }

    render () {
        return (
            <header className="nav-container">
                <div className="nav-link-cont nav-left">
                    <HamburgerIcon onClick={this.navEventhandler}/>
                    <Navbar open={this.state} className={this.state.active ? 'open-nav nav-link-box': 'nav-link-box'}/>
                </div>
                <div>
                    <img className="logo" src={logo} alt="sarash Logo"/>
                </div>
                <div className="nav-link-cont nav-right">
                    <a>
                        <CartIcon />
                    </a>
                    <a>
                        <UserLogo/>
                    </a>
                </div>
            </header>
        )
    }
}


export default Header;