import React from 'react';
import { api } from "../res";
import axios from "axios";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { Dimmer, Loader, Card, Grid, Segment } from 'semantic-ui-react';
import { Row, Col, Button } from "react-bootstrap";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProd: null,
            isLoading: true
        }
    }

    componentDidMount() {
        this.getRandomProduct();
    }

    getRandomProduct = () => {
        axios.get(api+"Products/1")
            .then(response => {
                this.setState({selectedProd: response.data, isLoading: false})
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { isLoading, selectedProd } = this.state;
        console.log(selectedProd)
        if (isLoading) return(
            <main className="container">
                <Segment id="load-container-segment">
                    <Dimmer inverted active>
                        <Loader inverted content="Loading.."/>
                    </Dimmer>
                </Segment>
            </main>
        ); else
        return(
            <main className="container">
                <Jumbotron>
                    <Row>
                        <Col sm={7} xs={12}>
                            <h1>Featured product!</h1>
                            <h2>{selectedProd["name"]}</h2>
                            <h4>{selectedProd["description"]}</h4>
                            <h4>{selectedProd["price"]}:-</h4>
                            <Button as={Link} to={"product/"+selectedProd["id"]}>Click here to see it!</Button>
                        </Col>
                        <Col sm={5} xs={12}>
                            <img style={{maxWidth: "100%"}} src={selectedProd["data"]}/>
                        </Col>
                    </Row>
                </Jumbotron>
                <Row className="justify-content-between my-5">
                    <Col sm={3} xs={12}>
                        <div className="medium-picture">
                            <span className="overlay-text">Medium picture</span>
                        </div>
                    </Col>
                    <Col sm={3} xs={12}>
                        <div className="medium-picture">
                            <span className="overlay-text">Medium picture</span>
                        </div>
                    </Col>
                    <Col sm={3} xs={12}>
                        <div className="medium-picture">
                            <span className="overlay-text">Medium picture</span>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-between my-5">
                    <Col sm={5}>
                        <div className="big-picture">
                            <span className="overlay-text">Large picture!</span>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className="big-picture">
                            <span className="overlay-text">Large picture!</span>
                        </div>
                    </Col>
                </Row>
            </main>
        );
    }
}

export default Home;