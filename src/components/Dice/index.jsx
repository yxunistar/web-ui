import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./style.sass";

const GETING_TIME = 600;

const SIDE = {
    1: ["center bigger"],
    2: ["center top", "center bottom"],
    3: ["center", "top left", "bottom right"],
    4: ["top left", "top right", "bottom left", "bottom right"],
    5: ["center", "top left", "top right", "bottom left", "bottom right"],
    6: ["top left", "top right", "bottom left", "bottom right", "center left", "center right"],
};

const CUBE = {
    X: ["front", "left", "bottom", "top", "right", "back"],
    1: ["front", "left", "bottom", "top", "right", "back"],
    2: ["bottom", "front", "left", "right", "back", "top"],
    3: ["bottom", "right", "front", "back", "left", "top"],
    4: ["bottom", "left", "back", "front", "right", "top"],
    5: ["top", "back", "left", "right", "front", "bottom"],
    6: ["back", "bottom", "left", "right", "top", "front"],
};

const rotatingStatus = ["getting started", "getting speed up", "rotating"];

const generateXSide = () => Array.from(Array(2).keys()).map((value, i) => <div key={`x-${i}`} className="x" />);

const generateDotSide = dot => {
    let isRed = [1, 4].indexOf(dot) > -1 ? "red" : "";
    return SIDE[dot].map(side => <div key={`dice-${side}`} className={`dot ${side} ${isRed}`} />);
};

export default class Dice extends React.Component {
    constructor() {
        super();
        this.state = {
            status: "stop",
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.switch !== this.props.switch) {
            if (this.props.switch) {
                this.start();
            } else {
                this.stop();
            }
        }
    }

    start = () => {
        this.setState({ status: "getting started" });
        setTimeout(() => this.turnSpeed("up"), GETING_TIME);
    };

    turnSpeed = action => {
        const status = {
            up: "rotating",
            down: "stop",
        };
        this.setState({ status: `getting speed ${action}` });
        setTimeout(() => this.setState({ status: status[action] }), 1400);
    };

    stop = () => {
        this.turnSpeed("down");
        setTimeout(() => this.setState({ status: "getting stopped" }), GETING_TIME);
    };

    render() {
        const {
            state: { status },
            props: { dot, active, onClick, disabled },
        } = this;
        const generateSide = dot === "X" ? generateXSide : generateDotSide;

        const senceClass = cx("sence", {
            active,
            disabled: disabled || status === "stop",
            rotating: rotatingStatus.indexOf(status) > -1,
        });

        const action = { onClick };

        return (
            <div className={senceClass} {...action}>
                <div className={`dice ${status}`}>
                    {CUBE[dot].map((side, index) => (
                        <React.Fragment key={`side-${side}`}>
                            <div className={`side ${side}`}>{generateSide(index + 1)}</div>
                            <div className={`side inner ${side}`} />
                        </React.Fragment>
                    ))}
                    <div className="cover x" />
                    <div className="cover y" />
                    <div className="cover z" />
                </div>
            </div>
        );
    }
}

Dice.defaultProps = {
    dot: 1,
    start: false,
    end: false,
    active: false,
    onClick: () => {},
};

Dice.propTypes = {
    dot: PropTypes.number,
    start: PropTypes.bool,
    end: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};
