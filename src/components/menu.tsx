import {Nav, Navbar} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import React from 'react'
import home from '../img/home.svg'
import logo from '../img/prusa-icons-set-logo.svg'

// import search from '../img/search.svg'

const Menu: React.FC<{}> = () => {

    // const menuItemsLeft =
    //     <>
    //         <LinkContainer to="/how-to" >
    //             <Nav.Link>How to</Nav.Link>
    //         </LinkContainer>
    //         <LinkContainer to="/license" >
    //             <Nav.Link>License</Nav.Link>
    //         </LinkContainer>
    //         <LinkContainer to="/help" >
    //             <Nav.Link>Help</Nav.Link>
    //         </LinkContainer>
    //     </>

    // const menuItemsRight =
    //     <>
    //         <Nav.Link><span>Theme</span></Nav.Link>

    //         <LinkContainer to="/search" >
    //             <Nav.Link className="no-line">
    //                 <img src={search} className="search" alt="Search" />
    //             </Nav.Link>
    //         </LinkContainer>
    //     </>

    return (
        <Navbar id="mainmenu" collapseOnSelect expand="lg" className="mb-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={3} className="flex-even d-flex justify-content-start">
                    <LinkContainer to="/" >
                        <Nav.Link className="no-line">
                            <img src={home} className="home" alt="Home" />
                        </Nav.Link>
                    </LinkContainer>
                    {/* {menuItemsLeft} */}
                </Nav>
                <Navbar.Brand className="flex-even d-flex justify-content-center">
                    <LinkContainer to="/" >
                        <Nav.Link className="no-line">
                            <img src={logo} className="logo" alt="Original Prusa Icons Set" />
                        </Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Nav className="flex-even d-flex justify-content-end">
                    {/* {menuItemsRight} */}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Menu
