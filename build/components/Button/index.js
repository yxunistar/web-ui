function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style.sass";

var TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    IMPORTANT: "important"
};
var CUSTOM = "custom";

var Button = function Button(props) {
    return React.createElement(
        "button",
        {
            className: cx(_defineProperty({
                "custom-button": props.type === CUSTOM,
                "unistar-button": props.type !== CUSTOM
            }, Object.values(TYPES).indexOf(props.type) >= 0 ? props.type : TYPES.STANDARD, true), props.className),
            disabled: props.disabled,
            onClick: props.onClick
        },
        props.children
    );
};

Button.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.oneOf([CUSTOM, TYPES.PRIMARY, TYPES.SECONDARY, TYPES.IMPORTANT]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

Button.defaultProps = {
    className: "",
    type: TYPES.PRIMARY,
    disabled: false,
    onClick: function onClick() {
        return console.warn("onClick");
    }
};

export default Button;