import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component{

    render(){
        return(
            <header className='header'>
            <div className='move-to-root'>
            <Link className='to-root' to='/'>To Home Page </Link>
            </div>
            </header>
        )
    }
}

export default Header;