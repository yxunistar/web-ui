import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import SelectMenu from "./SelectMenu";
import Icon from "../Icon";

class SelectItem extends React.Component {
    handleClick = event => {
        const { disabled, onClick, onSelect, eventKey } = this.props;

        if (disabled) {
            event.preventDefault();
        }

        if (disabled) {
            return;
        }

        if (onSelect) {
            onSelect(eventKey, event);
            onClick();
        }
    };

    render() {
        const { children, disabled, onClick, onSelect } = this.props;
        const menuItems = React.Children.toArray(children).filter(child => React.isValidElement(child));
        const others = React.Children.toArray(children).filter(child => !React.isValidElement(child));

        return (
            <div className={cx("menu-item-wrapper", { submenu: menuItems.length > 0 })}>
                <div className={cx("item", { disabled: disabled })} onClick={this.handleClick}>
                    {others}
                    {menuItems.length > 0 && <Icon.Right />}
                </div>
                {menuItems.length > 0 && (
                    <SelectMenu onSelect={onSelect} onClick={onClick}>
                        {menuItems}
                    </SelectMenu>
                )}
            </div>
        );
    }
}

SelectItem.defaultProps = {
    disabled: false,
};

SelectItem.propTypes = {
    disabled: PropTypes.bool,
};

export default SelectItem;
