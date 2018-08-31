import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            prev: 0,
            isForward: true,
            enter: false,
        };
        this.setCurrent = this.setCurrent.bind(this);
        this.play = this.play.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.goto = this.goto.bind(this);
        this.setForward = this.setForward.bind(this);
    }
    componentDidMount() {
        this.play();
    }
    play() {
        // setInterval(this.goto, 5000);
    }
    goto() {
        let previous = this.state.current;
        let next =
            Math.abs(this.state.current + (this.state.isForward ? 1 : -1)) % 3;
        this.setCurrent(next, previous);
    }
    setCurrent(cur, prev) {
        this.setState({
            current: cur,
            prev: prev,
        });
    }
    setForward(dir) {
        this.setState({
            isForward: !!dir,
        });
    }
    handleEnter() {
        this.setState({
            enter: true,
        });
    }
    handleLeave() {
        this.setState({
            enter: false,
        });
    }
    render() {
        let current = this.state.current,
            isForward = this.state.isForward,
            prev = this.state.prev;
        return (
            <div
                ref="carousel"
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}
                id="carousel-container"
                className="carousel">
                <Dots
                    data={["1", "2", "3"]}
                    current={current}
                    isForward={isForward}
                    prev={prev}
                />
                <Slides
                    data={["1", "2", "3"]}
                    current={current}
                    isForward={isForward}
                    prev={prev}
                />
                <Titles
                    data={["1", "2", "3"]}
                    current={current}
                    isForward={isForward}
                    prev={prev}
                />
                <ArrowButton
                    dir={1}
                    isVisible={this.state.enter}
                    goto={() => {
                        this.setForward(true);
                        this.goto();
                    }}
                />
                <ArrowButton
                    dir={-1}
                    isVisible={this.state.enter}
                    goto={() => {
                        this.setForward(false);
                        this.goto();
                    }}
                />
            </div>
        );
    }
}

const ArrowButton = ({dir, isVisible, goto}) => {
    let visible = isVisible ? "show" : "",
        name = `carousel-control-${
            dir > 0 ? "next" : "prev"
        } ${visible}`.trim();

    return (
        <a className={name} onClick={goto} role="button">
            <i className={`fa fa-angle-${dir > 0 ? "right" : "left"}`} />
        </a>
    );
};

const Dots = ({data, current, prev, isForward}) => {
    let allDots = data.map((dot, index) => {
        let dir = (
            <li
                className={current === index ? "active-slideprev" : ""}
                key={`dot-${index}`}
            />
        );
    });
    return <ol className="holder carousel-indicators">{allDots}</ol>;
};

const Slides = ({data, current, prev, isForward}) => {
    let dirName = isForward ? "-slideprev" : "-slidenext";
    let allSlides = data.map((slide, index) => {
        let cur = current === index ? `active${dirName}` : "";
        let follower = prev === index ? `prev${dirName}` : "";
        let name = `carousel-item ${cur} ${follower}`.trim();
        return (
            <div key={`slide-${index}`} className={name}>
                <a href="#">
                    <img src="https://firebasestorage.googleapis.com/v0/b/appworks-school-stylish.appspot.com/o/keyvisuals%2F1.jpg?alt=media&token=1b87e78f-4c98-49b7-a61e-e6a125cf6163" />
                </a>
            </div>
        );
    });

    return <div className="holder carousel-inner">{allSlides} </div>;
};

const Titles = ({data, current, prev}) => {
    let allTitles = data.map((title, index) => {
        return (
            <p key={`slide-${index}`} className="carousel-title">
                {title}
            </p>
        );
    });
    return <div className="holder carousel-title-wrapper">{allTitles} </div>;
};
