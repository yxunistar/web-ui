import React from "react";
import PropTypes from "prop-types";
import ThemeConsumer from "Theme/ThemeConsumer";
import { RadioGroupContext } from "../context";
import cx from "classnames";
import Checkbox from "../base/Checkbox";
import "./style.sass";

class Radio extends React.PureComponent {
    static contextType = RadioGroupContext;

    handleChange = e => {
        this.context.onChange && this.context.onChange(e);
    };

    render() {
        return (
            <ThemeConsumer>
                {({ getThemeClass }) => {
                    const { children, ...radioProps } = this.props;
                    if (this.context) {
                        radioProps.onChange = this.handleChange;
                        radioProps.checked = this.props.value === this.context.value;
                        radioProps.disabled = this.props.disabled || this.context.disabled;
                        radioProps.size = this.props.size || this.context.size;
                        radioProps.theme = this.props.theme || this.context.theme;
                    } else {
                        radioProps.size = this.props.size || "large";
                    }
                    return (
                        <label
                            className={cx(getThemeClass("radio", { theme: radioProps.theme }), this.props.className, {
                                [radioProps.size]: true,
                                checked: radioProps.checked,
                                disabled: radioProps.disabled,
                            })}
                        >
                            <Checkbox type="radio" {...radioProps} />
                            {children && <span>{children}</span>}
                        </label>
                    );
                }}
            </ThemeConsumer>
        );
    }
}

Radio.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOf(["large", "small"]),
    theme: PropTypes.oneOf(["early", "night"]),
};

Radio.defaultProps = {
    className: "",
    defaultChecked: false,
    disabled: false,
    value: "",
};

export default Radio;
