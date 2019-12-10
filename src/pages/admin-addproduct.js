import React from 'react';
import { Button, Form, Row, Col, Dropdown, Spinner } from "react-bootstrap";
import { api } from "../res";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { UpdatingText } from "../Components/TextUpdater";
import { SubmittedAlert } from "../Components/SubmittedAlert";
import "bootstrap-grid";

class AdminPanelProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            catList: [],
            brandList: [],
            selectedBrand: "",
            selectedCategory: "",
            catsLoaded: false,
            brandsLoaded: false,
            alertBox: null
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        axios.get(api+"categories/")
            .then((response) => {
                this.setState({catList: response.data, catsLoaded: true});
                this.IsDoneLoading(this);
            })
            .catch(error => {
                console.log("failed fetching categories");
                console.log(error);
            });
        axios.get(api+"brands/")
            .then(response => {
                this.setState({brandList: response.data, brandsLoaded: true});
                this.IsDoneLoading();
            })
            .catch(error => {
                console.log("failed fetching brands");
                console.log(error);
            });
    }

    IsDoneLoading = event => {
        const { catsLoaded, brandsLoaded } = this.state;
        if(catsLoaded && brandsLoaded) {
            this.setState({isLoading: false});
        }
    }

    fileInputHandler = event => {
        let r = new FileReader();
        r.onloadend = () => {
            this.setState({imgSrcString: r.result});
            console.log("Uploaded image");
        }
        r.readAsDataURL(event.target.files[0]);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.imgSrcString === null || this.state.imgSrcString === "") {
            console.log("no image");
            return;
        }
        const tags = event.target.producttags.value.split(",").map(item => {
            return item.trimLeft();
        });

        const content = {
            Data: this.state.imgSrcString,
            Name: event.target.productname.value,
            Description: event.target.productdesc.value,
            Price: event.target.productprice.value,
            BrandId: this.state.selectedBrand["id"],
            CategoryId: this.state.selectedCategory["id"],
            Tags: tags
        }

        axios.post(api+"admin/product/add", 
        JSON.stringify(content))
        .then(response => {
            this.setState({alertBox: <SubmittedAlert show={true} duration={4} subject={"new product"}/>, imgSrcString: ""});
            setTimeout(() => {
                this.setState({alertBox: null});
            }, 5000);
            this.setState({isLoading: false});
        })
        .catch(error => {
            console.log(error);
        });
        this.setState({isLoading: true});
        console.log("posting");
    }

    handleCatSelect = item => {
        this.setState({selectedCategory: item})
    }

    handleBrandSelect = item => {
        this.setState({selectedBrand: item})
    }

    handleFormReset = event => {
        if (!window.confirm("Are you sure you want to clear the form?")) {
            event.preventDefault();
        } else {
            this.setState({imgSrcString: "", selectedBrand: "", selectedCategory: ""});
        }
    }

    render() {
        const { alertBox, isLoading, selectedCategory, selectedBrand, imgSrcString, catList, brandList } = this.state;
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
            <>
                {alertBox}
                <Form id="add-product-form" onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
                    <Row> 
                        <Col md={6}>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Name</Form.Label>
                                </Col>
                                <Col md={9}>
                                    <Form.Control name="productname" type="text" placeholder="Product Name"></Form.Control>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Price</Form.Label>
                                </Col>
                                <Col md={9}>
                                    <Form.Control name="productprice" type="number" placeholder="Price"></Form.Control>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Description</Form.Label>
                                </Col>
                                <Col md={9}>
                                    <Form.Control name="productdesc" type="text" placeholder="Short description of the product"></Form.Control>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Tags</Form.Label>
                                </Col>
                                <Col md={9}>
                                    <Form.Control name="producttags" type="text" placeholder="Mens, Unisex, Childrens, separate with comma"></Form.Control>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Category</Form.Label>
                                </Col>
                                <Col md={4} className="align-self-center">
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-block" variant="secondary">
                                            Select a Category
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {catList.map((item,  key) => (
                                                <Dropdown.Item key={key} onClick={this.handleCatSelect.bind(this, item)}>{item["name"]}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col md={5} className="align-self-center">
                                    <Form.Label>
                                        <UpdatingText text={selectedCategory["name"]}></UpdatingText>
                                    </Form.Label>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={3} className="align-self-center">
                                    <Form.Label>Brand</Form.Label>
                                </Col>
                                <Col md={4} className="align-self-center">
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-block" variant="secondary">
                                            Select a Brand
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {brandList.map((item, key) => (
                                                <Dropdown.Item key={key} onClick={this.handleBrandSelect.bind(this, item)}>{item["name"]}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col md={5} className="align-self-center">
                                    <Form.Label>
                                        <UpdatingText text={selectedBrand["name"]}></UpdatingText>
                                    </Form.Label>
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
                            <Form.Control type="file" name="file" onChange={this.fileInputHandler}></Form.Control>
                            <img src={imgSrcString} className="preview-image" alt="upload preview"></img>
                        </Col>
                    </Row>
                </Form>
            </> 
        );
    }
}

export default AdminPanelProduct;