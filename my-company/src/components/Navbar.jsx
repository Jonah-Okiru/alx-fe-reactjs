import React from "react";
import { Link } from "react-router-dom";
function NavBar(){
    return(
        <nav style={{backgroundColor:'blue', padding:'1rem'}}>
            <ul style={{display:'flex', gap: '1rem', justifyContent:'center', listStyle:'none'}}>
                <li style={{display: 'inline'}}><Link style={{color:'white', textDecoration:'none'}} to="/">Home</Link></li>
                <li style={{display:'inline'}}><Link style={{color:'white', textDecoration:'none'}} to="/about">About</Link></li>
                <li style={{display:'inline'}}><Link style={{color:'white', textDecoration:'none'}} to="/services">Services</Link></li>
                <li style={{display: "inline"}}><Link style={{color:'white', textDecoration:'none'}} to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
export default NavBar;