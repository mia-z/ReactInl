import React from 'react';
import { api } from "../res";
import axios from "axios";
import { Dimmer, Loader, Card, Grid, Segment } from 'semantic-ui-react'

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ["none"],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getCats();
    }

    getCats = () => {
        axios.get(api+"Categories/")
            .then(response => {
                this.setState({categories: response.data, isLoading: false})
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { isLoading, categories } = this.state;
        if (isLoading) return(
            <main className="container">
                <Segment id="load-container-segment">
                    <Dimmer inverted active>
                        <Loader inverted content="Loading categories.."/>
                    </Dimmer>
                </Segment>
            </main>
        ); else
        return(
            <main className="container">
                <Grid columns={4}>
                    <Grid.Row stretched>
                        {categories.map((brands, key) => 
                            <Grid.Column className="my-3" key={key}>
                                <Card 
                                    image={brands.data}
                                    header={brands.name}
                                    description={brands.description}
                                />
                            </Grid.Column>
                        )}
                    </Grid.Row>
                </Grid>
            </main>
        );
    }
}

export default Categories;