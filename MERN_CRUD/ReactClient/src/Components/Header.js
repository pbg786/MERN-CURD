import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// To use routing functionalities
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">MERN Stack CRUD Operations</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="http://15.206.221.16:8000">Home</a></li>
                            <li ><a href="http://15.206.221.16:8000/addEmployee">Add New Employee</a></li>
                            <li ><a href="http://15.206.221.16:8000/list">List Employee</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;
