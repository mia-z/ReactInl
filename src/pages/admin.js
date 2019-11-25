import React from 'react';
import AdminPanelPictures from "./adminpictures"
import { Link, Switch, Route } from "react-router-dom";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;
        console.log(match.url)
        return(
            <main className="container" style={{backgroundColor: "whitesmoke"}}>
                admin panel
                <Link to={`${match.url}/pictures`}>Pictures</Link>
                <Switch>
                    <Route path="/Admin/Pictures">
                        <AdminPanelPictures />
                    </Route>
                </Switch>
            </main>
        );
    }
}

export default AdminPanel;