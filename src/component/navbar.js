import React from 'react';
import { Link } from "react-router-native";
import * as Icons from "react-icons/fa";
import "navbar.css";


function Navbar(){
    return(
         <div className='navbar'>
            <div className='navbar logo'>
                <h1>Logo</h1>
            </div>

            <ul className='navbar-menu'>
                <li><a href='/'>Home</a></li>
                <li><link to='notification'>notification</link></li>
                <li><a href='/'>community</a></li>
                <li><a href='/'>user</a></li>
            </ul>

         </div>
    )
}
export default Navbar