import "./style/reset.scss";
import "./style/main.scss";

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Cart from "./comp/Cart.js";
import Home from "./comp/Home/index.js";
import Profile from "./comp/Profile.js";
import Product from "./comp/Product.js";
import Header from "./comp/Header.js";
import {Footer} from "./comp/Footer.js";
import {initFirebase} from "./comp/fetch.js";
import {API} from "./comp/constant.js";
import {dispatch, store} from "./comp/reducer.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.setCurrentCategory = this.setCurrentCategory.bind(this);
    }
    update() {
        this.setState(store.getState());
    }
    componentDidMount() {
        this.unSubscribe = store.subscribe(this.update.bind(this));
        let storage = initFirebase();
        fetch(API.hostName + API.path)
            .then(response => response.json())
            .then(data => {
                dispatch("UPDATE_API_DATA", {data: data});
            });
    }

    componentDidUnMount() {
        this.unSubscribe();
    }
    setCurrentCategory(category) {
        dispatch("UPDATE_CATEGORY", {category: category});
    }
    render() {
        console.log(this.state.data);
        let filterdProduct = [];
        if (this.state.data) {
            filterdProduct = this.state.data.list;
            if (this.state.category) {
                filterdProduct = filterdProduct.filter(
                    product => product.category === this.state.category,
                );
            }
        }
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header category={this.setCurrentCategory} />
                        <Switch>
                            <Route
                                path="/"
                                component={() => <Home data={filterdProduct} />}
                                exact
                            />
                            <Route
                                path="/product:id?/"
                                component={() => <Product />}
                            />
                            <Route path="/cart" component={() => <Cart />} />
                            <Route
                                path="/profile"
                                component={() => <Profile />}
                            />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("main"));

// todo should add an error when user rounter to other path
