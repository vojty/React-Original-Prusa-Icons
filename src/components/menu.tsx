import { Form, FormControl, Nav, Navbar } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import React from 'react'
import home from '../img/home.svg'
import logo from '../img/prusa-icons-set-logo.svg'
import search from '../img/search.svg'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const LogoLink = styled(Nav.Link)`
    margin-top: 0;
    padding-top: 0;
`

interface IProps {
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void
}

const Menu: React.FC<IProps> = (props) => {

    let location = useLocation()

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

    const searchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchTerm(e.currentTarget.value)
    }

    const menuItemsRight =
        <>
            {location.pathname === '/React-Original-Prusa-Icons' && <Form inline>
                <img src={search} className="search" alt="Search" />
                <FormControl value={props.searchTerm} onChange={searchTermChange} type="text" placeholder="Search" className="ml-sm-2 mr-sm-2" />
            </Form>}
        </>

    return (
        <Navbar id="mainmenu" collapseOnSelect expand="lg" className="mb-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={3} className="flex-even d-flex justify-content-start">
                    <LinkContainer to="/React-Original-Prusa-Icons" >
                        <Nav.Link className="no-line">
                            <img src={home} className="home" alt="Home" />
                        </Nav.Link>
                    </LinkContainer>
                    {/* {menuItemsLeft} */}
                </Nav>
                <Navbar.Brand className="flex-even d-flex justify-content-center">
                    <LinkContainer to="/React-Original-Prusa-Icons" >
                        <LogoLink className="no-line">
                            <img src={logo} className="logo" alt="Original Prusa Icons Set" />
                        </LogoLink>
                    </LinkContainer>
                </Navbar.Brand>
                <Nav className="flex-even d-flex justify-content-end">
                    {menuItemsRight}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu
