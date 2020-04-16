import React from "react";
import PropTypes from "prop-types";
import ThemeConsumer from "Theme/ThemeConsumer";
import { RadioGroupProvider } from "../context";
import cx from "classnames";
import "./style.sass";

function getCheckedValue(children) {
    let value = null;
    let matched = false;
    React.Children.forEach(children, radio => {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched && { value };
}

class Group extends React.PureComponent {
    constructor(props) {
        super(props);
        let value = null;
        if ("value" in props) {
            value = props.value;
        } else if ("defaultValue" in props) {
            value = props.defaultValue;
        } else {
            const checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        this.state = { value };
    }

    static getDerivedStateFromProps(props) {
        if ("value" in props) {
            return { value: props.value };
        }
        const checkedValue = getCheckedValue(props.children);
        if (checkedValue) {
            return { value: checkedValue.value };
        }
        return null;
    }

    handleChange = e => {
        const lastValue = this.state.value;
        if (!("value" in this.props)) this.setState({ value: e.target.value });

        const { onChange } = this.props;
        if (onChange && e.target.value !== lastValue) onChange(e);
    };

    render() {
        const { children } = this.props;
        return (
            <RadioGroupProvider
                value={{
                    value: this.state.value,
                    disabled: this.props.disabled,
                    size: this.props.size,
                    theme: this.props.theme,
                    onChange: this.handleChange,
                }}
            >
                <ThemeConsumer>
                    {({ getThemeClass }) => {
                        return (
                            <div
                                className={cx(
                                    getThemeClass("radio-group", {
                                        theme: this.props.theme,
                                    }),
                                    this.props.className
                                )}
                            >
                                {children}
                            </div>
                        );
                    }}
                </ThemeConsumer>
            </RadioGroupProvider>
        );
    }
}

Group.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["large", "small"]),
    theme: PropTypes.oneOf(["early", "night"]),
    onChange: PropTypes.func,
};

Group.defaultProps = {
    className: "",
    size: "large",
    onChange() {},
};

export default Group;
