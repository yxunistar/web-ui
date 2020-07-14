import React from "react";
import PropTypes from "prop-types";
import ThemeConsumer from "../../Theme/ThemeConsumer";
import { Exclamation } from "../../Icon";
import cx from "classnames";
import "./style.sass";

const TYPES = {
    EXCLAMATION: "exclamation",
};

class Item extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, children } = this.props;
        return (
            <ThemeConsumer>
                {({ getThemeClass }) => {
                    return (
                        <li className={cx(getThemeClass("list-item"), this.props.className)}>
                            {type && type === TYPES.EXCLAMATION && <Exclamation />}
                            {children}
                        </li>
                    );
                }}
            </ThemeConsumer>
        );
    }
}

Item.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.oneOf(Object.values(TYPES)),
};

Item.defaultProps = {
    className: "",
};

export default Item;
