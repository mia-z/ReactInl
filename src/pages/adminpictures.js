import React from 'react';
import { Button, Card, Image } from "bootstrap";
import "bootstrap-grid";

class AdminPanelPictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: "",
            isLoading: false
        }
    }

    fileInputHandler = event => {
        let r = new FileReader();
        r.onloadend = () => {
            this.setState({imgSrc: r.result, isLoading: false});
        }
        r.readAsDataURL(event.target.files[0]);
        this.setState({isLoading: true});
    }
    
    postImageHandler = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const content = {
            name: this.refs.picName.value,
            data: this.state.imgSrc
        };
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("loadend", res => {
            this.setState({isLoading: false});
        });
        xhr.open("POST", "http://localhost:5000/api/Image/");
        xhr.send(JSON.stringify(content));
    }

    render() {
        const { imgSrc, isLoading } = this.state;
        //if (isLoading)
        //    return(<SemanticLoader />);
        //else
            return(
                <main className="container" style={{backgroundColor: "whitesmoke"}}>
                    <input type="file" name="file" onChange={this.fileInputHandler}/>
                    <img src={imgSrc} className="preview-image" alt="upload preview"></img>
                    <input ref="picName" type="text" className="form-control"></input>
                    <button className="btn btn-primary" onClick={this.postImageHandler.bind(this)}>Upload image</button>
                </main>
            );
    }
}

export default AdminPanelPictures;