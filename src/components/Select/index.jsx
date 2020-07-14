import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Button from "../";
import Icon from "../Icon";
import ThemeConsumer from "../Theme/ThemeConsumer";
import SelectMenu from "./SelectMenu";
import SelectItem from "./SelectItem";
import "./style.sass";

class Select extends React.Component {
    state = { selected: "", toggle: false };

    handleClick = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    handleSelect = eventKey => {
        this.setState({ selected: eventKey });
        this.props.onSelect(eventKey);
    };

    render() {
        const { children, disabled, placeholder, theme, type } = this.props;
        const { selected, toggle } = this.state;
        return (
            <ThemeConsumer>
                {({ getThemeClass }) => (
                    <div className={cx(getThemeClass("select", theme), { active: toggle })}>
                        <Button type="custom" disabled={disabled} onClick={this.handleClick}>
                            {selected ? selected : placeholder || children.props.children[0].props.eventKey}
                            {type === "default" && <Icon.Down />}
                        </Button>
                        <div className="menu-wrapper">
                            {React.Children.map(children, child => {
                                if (React.isValidElement(child)) {
                                    return React.cloneElement(child, {
                                        ...child.props,
                                        onClick: this.handleClick,
                                        onSelect: this.handleSelect,
                                    });
                                }

                                return child;
                            })}
                        </div>
                    </div>
                )}
            </ThemeConsumer>
        );
    }
}

Select.Menu = SelectMenu;
Select.Item = SelectItem;

Select.defaultProps = {
    disabled: false,
    placeholder: "",
    type: "default",
    onSelect: () => {},
};

Select.propTypes = {
    disabled: PropTypes.bool,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    type: PropTypes.string,
    onSelect: PropTypes.func,
    theme: PropTypes.oneOf(["early", "night"]),
};

export default Select;
