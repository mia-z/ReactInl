import React from 'react';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ["none"]
        }
    }

    componentDidMount() {
        this.getCats();
    }

    getCats = () => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => this.setState({categories: JSON.parse(xhr.responseText)}));
        xhr.open("GET", "http://localhost:5000/api/Categories/");
        xhr.send();
    }

    render() {
        const { categories } = this.state;
        return(
            <main className="container" style={{backgroundColor: "whitesmoke"}}>
                <ul>
                    {categories.map(cat => 
                        <li key={cat.id}>{cat.name}</li>)}
                </ul>
            </main>
        );
    }
}

export default Categories;