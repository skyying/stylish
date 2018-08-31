import React from "react";
import lineImg from "../images/line.png";
import twitterImg from "../images/twitter.png";
import facebookImg from "../images/facebook.png";
import {getKey} from "../comp/common/common.js";
import {NavLink} from "react-router-dom";

export const Footer = () => (
    <footer>
        <div className="footer-inner">
            <nav className="info-link">
                <NavLinkGroup
                    links={[
                        "關於 Stylish",
                        "服務條款",
                        "隱私服務",
                        "聯絡我們",
                        "FAQ",
                    ]}
                />
            </nav>
            <nav className="social">
                <ImageGroup imageLink={[lineImg, twitterImg, facebookImg]} />
            </nav>
            <span>2018 All rights reserverd.</span>
        </div>
    </footer>
);

const ImageGroup = ({imageLink}) => {
    return imageLink.map((link, index) => {
        return (
            <NavLink key={getKey() + `-${index}`} to="/">
                <img src={link} alt="" />
            </NavLink>
        );
    });
};

const NavLinkGroup = ({links}) => {
    return links.map((link, index) => {
        return (
            <NavLink key={getKey() + `-${index}`} to="/">
                {link}
            </NavLink>
        );
    });
};
