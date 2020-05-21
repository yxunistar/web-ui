import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./style";

const Tag = props => {
    return (
        <div className={cx("unistar-tag")} style={props.style}>
            <span>{props.text}</span>
        </div>
    );
};

Tag.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
};

Tag.defaultProps = {
    text: "",
    style: {},
};

export default Tag;
