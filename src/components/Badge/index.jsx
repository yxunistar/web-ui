import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style";

const Badge = props => {
    return (
        <span className={cx("unistar-badge", { hundred: props.count > 100 })} style={props.style}>
            {props.count}
        </span>
    );
};

Badge.propTypes = {
    count: PropTypes.number,
    style: PropTypes.object,
};

Badge.defaultProps = {
    count: 0,
    style: {},
};

export default Badge;
