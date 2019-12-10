import React from 'react';
import { Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { api } from "../res";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubmittedAlert } from "../Components/SubmittedAlert";
import "bootstrap-grid";

class AdminPanelCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrcString: "",
            isLoading: false,
            alertBox: null
        }
    }

    fileInputHandler = (event) => {
        let r = new FileReader();
        r.onloadend = () => {
            this.setState({imgSrcString: r.result});
            console.log("Uploaded image");
        }
        r.readAsDataURL(event.target.files[0]);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.imgSrcString === null || this.state.imgSrcString === "") {
            console.log("no image");
            return;
        }
        const content = {
            Data: this.state.imgSrcString,
            Name: event.target.categoryname.value,
            Description: event.target.categorydesc.value
        }

        axios.post(api+"admin/category/create", 
        JSON.stringify(content))
        .then((response) => {
            this.setState({alertBox: <SubmittedAlert show={true} duration={4} subject={"new category"}/>, imgSrcString: "" });
            setTimeout(() => {
                this.setState({alertBox: null});
            }, 5000);
            this.setState({isLoading: false});
        })
        .catch((error) => {
            console.log(error);
        });
        this.setState({isLoading: true});
        console.log("posting");
    }

    handleFormReset = event => {
        if (!window.confirm("Are you sure you want to clear the form?")) {
            event.preventDefault();
        } else {
            this.setState({imgSrcString: ""});
        }
    }

    render() {
        const { alertBox, imgSrcString, isLoading } = this.state;
        if (isLoading) return(
            <>
                <Row className="justify-content-center m-5">
                    <Spinner animation="border"/>
                </Row>
                <Row className="justify-content-center m-5">
                    <span>Loading..</span>
                </Row>
            </>
        ); else 
        return(
            <div>
                {alertBox}
                <Form onSubmit={this.handleFormSubmit.bind(this)} onReset={this.handleFormReset}>
                    <Row> 
                        <Col md={6}>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Category Name</Form.Label>
                                </Col>
                                <Col md={9}>
                                    <Form.Control name="categoryname" type="text" placeholder="Type the name here.."></Form.Control>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Description</Form.Label>
                                </Col>
                                <Col md={9}>
                                    <Form.Control name="categorydesc" type="text" placeholder="Description in here.."></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Row className="justify-content-center">
                                        <Col>
                                            <Button variant="danger" type="reset" block>
                                                <FontAwesomeIcon icon="trash-alt" className="fas fa-trash-alt"></FontAwesomeIcon>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={10}>
                                    <Row className="justify-content-center">
                                        <Col md={7}>
                                            <Button block type="submit">Submit</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="file" name="file" onChange={this.fileInputHandler}>
                            </Form.Control>
                            <img src={imgSrcString} className="preview-image" alt="upload preview"></img>
                        </Col>
                    </Row>
                </Form>
            </div> 
        );
    }
}

export default AdminPanelCategory;