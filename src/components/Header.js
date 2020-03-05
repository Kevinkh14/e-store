import React, {Component} from 'react'
import  './styles/Header.css'
import {Redirect, Link} from 'react-router-dom'

class Header extends Component {

    render() {
        return(
            <div className = 'Header'>
                <section className = 'right-header'>
                    <Link to ="/"><img id = 'title' src ='https://res.cloudinary.com/kevin14/image/upload/v1583363062/nuopfva7gjtwki2kh9qx.png'></img></Link>
                    
                </section>
                <section>
                    <i class="fas fa-shopping-cart"></i>
                    <h1>Cart</h1>
                </section>
            </div>
        )
    }
}
export default Header