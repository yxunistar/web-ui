import React from "react";
import PropTypes from "prop-types";
import ThemeConsumer from "Theme/ThemeConsumer";
import Item from "./Item";
import cx from "classnames";
import "./style.sass";

const TYPES = {
    DEFAULT: "default",
    ORDERED: "ordered",
    EXCLAMATION: "exclamation",
};

class List extends React.PureComponent {
    render() {
        const { type, children } = this.props;
        return (
            <ThemeConsumer>
                {({ getThemeClass }) => {
                    if (type === TYPES.DEFAULT)
                        return <ul className={cx(getThemeClass("list"), TYPES.DEFAULT, this.props.className)}>{children}</ul>;
                    if (type === TYPES.ORDERED)
                        return <ol className={cx(getThemeClass("list"), TYPES.ORDERED, this.props.className)}>{children}</ol>;
                    if (type === TYPES.EXCLAMATION)
                        return (
                            <ul className={cx(getThemeClass("list"), TYPES.EXCLAMATION, this.props.className)}>
                                {React.Children.map(children, child => React.cloneElement(child, { type }))}
                            </ul>
                        );
                }}
            </ThemeConsumer>
        );
    }
}

List.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.oneOf(Object.values(TYPES)),
};

List.defaultProps = {
    className: "",
    type: TYPES.DEFAULT,
};

List.Item = Item;

export default List;
