import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Container, Col, Row, Form } from "react-bootstrap";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                "Sweden", "Finland", "Denmark", "Norway", "Iceland"
            ],
            languages: [
                "Swedish", "English", "Finnish", "Danish", "Norwegian", "Icelandic"
            ],
            selectedLanguage: "Select Language",
            selectedCountry: "Select Country"
        }
    }

    handleLanguageChange = (event) => {
        this.setState({selectedLanguage: event.target.text});
    }

    handleCountryChange = (event) => {
        this.setState({selectedCountry: event.target.text});
    }

    render() {
        const { languages, countries, selectedLanguage, selectedCountry } = this.state;
        return(
            <footer className="px-5">
                <Row className="justify-content-center justify-content-sm-center mt-2"> {/* Promises and icons */}
                    <Col xs={12} md={6} lg={3} className="text-center my-2">
                        <FontAwesomeIcon icon="globe" className="fas fa-2x"/>
                        <span className="icon-span">&nbsp;Worldwide Shipping</span>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center my-2">
                        <FontAwesomeIcon icon="plane" className="fas fa-2x"/>
                        <span className="icon-span">&nbsp;Fast delivery</span>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center my-2">
                        <FontAwesomeIcon icon="shield-alt" className="fas fa-2x"/>
                        <span className="icon-span">&nbsp;Payment protection</span>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="text-center my-2">
                        <FontAwesomeIcon icon="smile" className="fas fa-2x"/>
                        <span className="icon-span">&nbsp;Lots of satisfied customers</span>
                    </Col>
                </Row>
                <Row className="justify-content-between justify-content-sm-center mt-4 pb-5"> {/* left side - link columns, right side - lang and country dropdown */}
                    <Col md={6}>
                        <Row>
                            <Col lg={4} md={12}>
                                <h5>Shopping</h5>
                                <ul>
                                    <li>
                                        Winter Jackets
                                    </li>
                                    <li>
                                        Bubble Coats
                                    </li>
                                    <li>
                                        Caps and Hats
                                    </li>
                                    <li>
                                        Trenchcoats
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={12}>
                            <h5>My Pages</h5>
                                <ul>
                                    <li>
                                        My orders
                                    </li>
                                    <li>
                                        My Account
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={12}>
                            <h5>Customer Service</h5>
                                <ul>
                                    <li>
                                        Returns policy
                                    </li>
                                    <li>
                                        Integrity and terms
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3}>
                        <Row>
                            <Col>
                                <span>
                                    Country
                                </span>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {selectedCountry}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {countries.map((c, key) => (
                                            <Dropdown.Item key={key} onClick={this.handleCountryChange}>
                                                {c}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <span>
                                    Language
                                </span>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {selectedLanguage}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {languages.map((l, key) => (
                                            <Dropdown.Item key={key} onClick={this.handleLanguageChange}>
                                                {l}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;