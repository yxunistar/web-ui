import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ThemeConsumer from "Theme/ThemeConsumer";
import { uniqueKey } from "./utils";
import "./style.sass";

const defaultValue = `label-${uniqueKey()}`;
class Item extends React.PureComponent {
    render() {
        const { label, className, children } = this.props;
        return (
            <ThemeConsumer>
                {({ getThemeClass }) => {
                    return (
                        <div className={cx(getThemeClass("form-item"), className)}>
                            {label && (
                                <label className="form-item-required" htmlFor={defaultValue}>
                                    {label}
                                </label>
                            )}
                            {React.Children.map(children, child => {
                                if (React.isValidElement(child)) {
                                    return React.cloneElement(child, {
                                        ...child.props,
                                        id: defaultValue,
                                    });
                                }
                            })}
                        </div>
                    );
                }}
            </ThemeConsumer>
        );
    }
}

Item.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    label: PropTypes.string,
};

Item.defaultProps = {
    className: "",
};

export default Item;
