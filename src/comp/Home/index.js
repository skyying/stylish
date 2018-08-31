import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Carousel from "../Carousel/index.js";
import {NavLink} from "react-router-dom";
import {getKey} from "../common/common.js";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let productListData = this.props.data;
        let allProducts = productListData.map((item, index) => {
            return (
                <ProductItem
                    key={getKey() + `-${index}`}
                    itemData={productListData[index]}
                />
            );
        });

        return (
            <main>
                <Carousel />
                <div className="product-list">
                    <div id="product-list" className="product-list-inner">
                        {allProducts}
                    </div>
                </div>
            </main>
        );
    }
}

const ProductItem = ({itemData}) => (
    <div className="product-item">
        <div className="product-item-inner">
            <NavLink to={`/product/?id=${itemData.id}`}>
                <img src="https://firebasestorage.googleapis.com/v0/b/appworks-school-stylish.appspot.com/o/201807201824%2Fmain.jpg?alt=media&token=40eaa64b-eae6-410a-b531-1efab7b2b3e4" />
            </NavLink>
            <div className="product-info">
                <ul>
                    <ColorItems colors={itemData.colors} />
                </ul>
                <h3 className="product-name">{itemData.name}</h3>
                <p className="price">{`TWD.${itemData.price}`}</p>
            </div>
        </div>
    </div>
);

const ColorItems = ({colors}) => {
    return Object.keys(colors).map((colorItem, index) => {
        return (
            <li key={getKey() + `-${index}`}>
                <a style={{background: `#${colors[colorItem].code}`}} />
            </li>
        );
    });
};
