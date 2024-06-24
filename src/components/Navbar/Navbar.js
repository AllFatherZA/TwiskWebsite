import React, {Component} from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import logo  from '../images/twisklogo.png'
import '../images/twisklogo.css'
import {Link} from 'react-router-dom'
class Navbar extends Component{
    state ={clicked: false}
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
        <nav className="NavbarItems">
            <Link to='/Home'><img src={logo} className="image-container" width="120" height ="120"alt='logo'/></Link>
            <h1 className="navbar-logo">Twisk</h1>
              <div className="menu-icon" onClick={this.handleClick} >
                <i className={this.state.clicked?'fas fa-times': 'fas fa-bars'}></i>
              </div>
              <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key= {index}><a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
              </ul>
        </nav>
    )}

}
export default Navbar