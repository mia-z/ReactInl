import React from 'react';
import AdminPanelProduct from "./admin-addproduct";
import AdminPanelBrand from "./admin-addbrand";
import AdminPanelCategory from "./admin-addcategory"
import { Tabs, Tab } from "react-bootstrap";

class AdminPanel extends React.Component {

    render() {
        return(
            <main className="container">
               <Tabs defaultActiveKey="product-add" id="tab-root">
                   <Tab eventKey="product-add" title="Add Product">
                       <AdminPanelProduct/>
                   </Tab>
                   <Tab eventKey="brand-add" title="Add Brand">
                        <AdminPanelBrand/>
                   </Tab>
                   <Tab eventKey="category-add" title="Add Category">
                       <AdminPanelCategory/>
                   </Tab>
               </Tabs>
            </main>
        );
    }
}

export default AdminPanel;