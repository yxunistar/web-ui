import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style.sass";

const TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    IMPORTANT: "important",
};
const CUSTOM = "custom";

const Button = props => {
    return (
        <button
            className={cx(
                {
                    "custom-button": props.type === CUSTOM,
                    "unistar-button": props.type !== CUSTOM,
                    [Object.values(TYPES).indexOf(props.type) >= 0 ? props.type : TYPES.STANDARD]: true,
                },
                props.className
            )}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.oneOf([CUSTOM, TYPES.PRIMARY, TYPES.SECONDARY, TYPES.IMPORTANT]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: "",
    type: TYPES.PRIMARY,
    disabled: false,
    onClick: () => console.warn("onClick"),
};

export default Button;
