import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Container, Col, Row, Form, Nav} from "react-bootstrap";

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
                            <Row className="my-4">
                                <Col lg={8} sm={8} xs={9} id="logo-box">Freaky Fashion</Col>
                                <Col lg={4} sm={4} xs={3} id="search-box">
                                    <Form.Control type="text" id="search-box-input" placeholder="Search here.."></Form.Control>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} xl={5} className="mx-2">
                            <Row className="justify-content-end my-4">
                                <Col xs={6} mx={4}>
                                    <Dropdown className="w-5">
                                        <Dropdown.Toggle variant="info" id="language-dropdown">
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
                                    <FontAwesomeIcon icon="eye" className="fas fa-eye fa-3x"/>
                                </Col>
                                <Col xs={2} mx={4}>
                                    <FontAwesomeIcon icon="heart" className="fas fa-eye fa-3x"/>
                                </Col>
                                <Col xs={2} mx={4}>
                                    <FontAwesomeIcon icon="shopping-cart" className="fas fa-eye fa-3x"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Nav id="links-row" className="row">
                        {links.map(link => 
                            <Nav.Item className="w-auto">
                                <Nav.Link>
                                    <Link to={`/${link}`}>{link}</Link>
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