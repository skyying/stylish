import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import logoImage from "../images/logo.png";
import {NavLink} from "react-router-dom";
import {getKey} from "../comp/common/common.js";

const productCategoryData = {
    0: {
        category: "men",
        text: "男裝",
    },
    1: {
        category: "women",
        text: "女裝",
    },
    2: {
        category: "accessories",
        text: "配件",
    },
};

const getKeyArr = (obj, key) => {
    return Object.keys(obj).map(k => obj[k][key]);
};

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <LogoLink category={this.props.category} />
                <Navigator
                    category={this.props.category}
                    linkText={getKeyArr(productCategoryData, "text")}
                    type={getKeyArr(productCategoryData, "category")}
                />
                <div className="right">
                    <div className="right-inner">
                        <SearchInput />
                        <IconBtn
                            linkText={["會員", "購物車"]}
                            name={["icon-cart", "fb-login-button icon-user"]}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

const LogoLink = ({category}) => (
    <NavLink to="/">
        <div onClick={() => category(null)} className="logo">
            <img src={logoImage} alt="Stylish" />
        </div>
    </NavLink>
);

const LinkItem = ({text, category, id}) => {
    return (
        <React.Fragment>
            <a onClick={() => category(id)}>{text}</a> <b>|</b>
        </React.Fragment>
    );
};

const Navigator = ({linkText, category, type}) => {
    let buttons = linkText.map((link, index) => {
        return (
            <LinkItem
                category={category}
                id={type[index]}
                key={getKey() + `-${index}`}
                text={link}
            />
        );
    });
    return <nav className="category">{buttons}</nav>;
};

const SearchInput = () => {
    return (
        <React.Fragment>
            <div className="search-toggle-btn" />
            <div className="search-wrapper">
                <div className="search-inner">
                    <button className="search-btn" />
                    <input type="search" id="search" placeholder="Search..." />
                </div>
            </div>
        </React.Fragment>
    );
};

const IconBtn = ({linkText, name}) => {
    let buttons = linkText.map((link, index) => {
        return (
            <button key={index} className={`btn ${name[index]}`}>
                <span className="hide"> {link} </span>
            </button>
        );
    });
    return <React.Fragment>{buttons}</React.Fragment>;
};
