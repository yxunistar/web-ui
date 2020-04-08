import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style";

const TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    IMPORTANT: "important",
};
const CUSTOM = "custom";

const Button = props => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => {
                return (
                    <button
                        className={cx(
                            getThemeClass("button", {
                                custom: props.type === CUSTOM,
                            }),
                            {
                                [Object.values(TYPES).indexOf(props.type) >= 0 ? props.type : TYPES.PRIMARY]:
                                    props.type !== CUSTOM,
                                active: props.active,
                            },
                            props.className
                        )}
                        disabled={props.disabled}
                        onClick={props.onClick}
                    >
                        {props.children}
                    </button>
                );
            }}
        </ThemeConsumer>
    );
};

Button.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.oneOf([CUSTOM, TYPES.PRIMARY, TYPES.SECONDARY, TYPES.IMPORTANT]),
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: "",
    type: TYPES.PRIMARY,
    active: false,
    disabled: false,
    onClick: () => console.warn("onClick"),
};

export default Button;
