import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Container, Col, Row, Form, Nav } from "react-bootstrap";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                "Home", "News", "Categories", "Brands", "Sale", "About", "Contact"
            ]
        }
    }
    
    render() {
        const { links } = this.state;
        return(
            <header>
                <Container>
                    <Row className="justify-content-between">
                        <Col lg={12} xl={6} className="mx-2">
                            <Row className="justify-content-center my-4">
                                <Col lg={8} sm={8} xs={9} id="logo-box"><h1 id="header-title">Freaky Fashion</h1></Col>
                                <Col lg={4} sm={4} xs={12} id="search-box" className="mt-4">
                                    <Form.Control type="text" id="search-box-input" placeholder="Search here.."/>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} xl={5} className="mx-2">
                            <Row className="justify-content-end my-5">
                                <Col xs={6} mx={4}>
                                    <Dropdown className="w-5">
                                        <Dropdown.Toggle className="btn-block" variant="info" id="language-dropdown">
                                            Language
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu id="language-menu">
                                            <Dropdown.Item>English</Dropdown.Item>
                                            <Dropdown.Item>Swedish</Dropdown.Item>
                                            <Dropdown.Item>Finnish</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col xs={2} mx={0}>
                                    <FontAwesomeIcon icon="eye" className="fas fa-3x"/>
                                </Col>
                                <Col xs={2} mx={4}>
                                    <FontAwesomeIcon icon="heart" className="fas fa-3x"/>
                                </Col>
                                <Col xs={2} mx={4}>
                                    <FontAwesomeIcon icon="shopping-cart" className="fas fa-3x"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Nav id="links-row" className="row">
                        {links.map((link, key) => 
                            <Nav.Item key={key} className="w-auto">
                                <Nav.Link as={Link} to={`/${link}`}>{link}
                                </Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>   
                </Container>             
            </header>
        );
    }
}

export default Header;