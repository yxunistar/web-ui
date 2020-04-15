import React from "react";
import PropTypes from "prop-types";

class Checkbox extends React.PureComponent {
    constructor(props) {
        super(props);

        const checked = "checked" in props ? props.checked : this.props.defaultChecked;

        this.state = {
            checked,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if ("checked" in props) {
            return {
                ...state,
                checked: props.checked,
            };
        }
        return null;
    }

    handleChange = e => {
        const { disabled, onChange } = this.props;
        if (disabled) return;
        if (!("checked" in this.props)) {
            this.setState({ checked: e.target.checked });
        }
        if (onChange) {
            onChange({
                ...this.props,
                target: {
                    ...this.props,
                    checked: e.target.checked,
                },
            });
        }
    };

    render() {
        return (
            <span className={this.props.type}>
                <input
                    type={this.props.type}
                    checked={!!this.state.checked}
                    disabled={this.props.disabled}
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <span className={`${this.props.type}-inner`} />
            </span>
        );
    }
}

Checkbox.propTypes = {
    type: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Checkbox.defaultProps = {
    type: "checkbox",
    defaultChecked: false,
    disabled: false,
    value: "",
};

export default Checkbox;
