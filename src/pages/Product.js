import React from 'react';
import axios from "axios";
import { api } from "../res";
import { Dimmer, Loader, Card, Grid, Segment } from 'semantic-ui-react'
import { Row, Col, Button, FormCheck, Dropdown } from "react-bootstrap";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisProduct: null,
            isLoading: true,
            sizes: ["Small", "Medium", "Large"],
            selectedSize: "Select Size"
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(api+"products/" + params.id)
            .then(response => {
                this.setState({selectedProd: response.data, isLoading: false})
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSizeChange = (event) => {
        this.setState({selectedSize: event.target.text});
    }

    render() {
        const { thisProduct, isLoading, selectedSize, sizes } = this.state;
        if (isLoading) return(
            <main className="container">
                <Segment id="load-container-segment">
                    <Dimmer inverted active>
                        <Loader inverted content="Loading product.."/>
                    </Dimmer>
                </Segment>
            </main>
        ); else
        return (
            <main className="container">
                <Row className="justify-content-between mt-1 mb-5"> {/* product view row */}
                    <Col xs={12} sm={5}>
                        <div className="preview-portrait mobile-fix">
                            <span className="overlay-text">product portrait</span>
                        </div>
                    </Col>
                    <Col md={12} lg={4} xl={7}>
                        <Row className="mb-1">
                            <h3>Product Title</h3>
                        </Row>
                        <Row className="my-2">
                            <p>Product Number</p>
                        </Row>
                        <Row className="my-2">{/*description*/}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec faucibus quam. Cras id purus sit amet augue condimentum suscipit quis at magna. Ut in risus metus. Maecenas in augue quis justo scelerisque ultricies. Nullam eu molestie mi, sit amet porta orci. Aliquam aliquam viverra ipsum vitae vehicula. Integer faucibus laoreet leo eget bibendum. Integer tempor ex vel massa aliquam varius. Nunc nisl eros, posuere iaculis nisl nec, porttitor congue diam. Vestibulum ac nisi arcu. Aliquam erat volutpat. Integer consectetur, leo id consectetur porta, enim risus sodales elit, eu venenatis sapien dolor ac sem.</p>
                        </Row>
                        <Row className="my-2">
                            <h4>499SEK</h4>
                        </Row>
                        <Row className="mt-2">
                            <h4>Choose Variant</h4>
                        </Row>
                        <Row className="mb-2">
                            <FormCheck inline label="Blue" type="radio" />
                            <FormCheck inline label="Red" type="radio" />
                            <FormCheck inline label="Yellow" type="radio" />
                            <FormCheck inline label="White" type="radio" />
                        </Row>
                        <Row className="mt-2">
                            <h4>Choose size</h4>
                        </Row>
                        <Row className="mb-4">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {selectedSize}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {sizes.map((s, key) => (
                                        <Dropdown.Item key={key} onClick={this.handleSizeChange}>
                                            {s}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Row>
                        <Row className="my-2">
                            <Col sm={4} xs={6}>
                                <Button block>
                                    Buy
                                </Button>
                            </Col>
                            <Col sm={4} xs={6}>
                                <Button block>
                                    Save to list
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <h3>Recommended products!</h3>
                </Row>
                <Row className="justify-content-between mb-5"> {/* recommended row */}
                    <Col sm={3} xs={12}>
                        <div className="medium-picture no-mobile">
                            <span className="overlay-text">Med picture</span>
                        </div>
                    </Col>
                    <Col sm={3} xs={12}>
                        <div className="medium-picture no-mobile">
                            <span className="overlay-text">Med picture</span>
                        </div>
                    </Col>
                    <Col sm={3} xs={12}>
                        <div className="medium-picture no-mobile">
                            <span className="overlay-text">Med picture</span>
                        </div>
                    </Col>
                </Row>
            </main>
        );
    }
}

export default Product;