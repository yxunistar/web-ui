import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style.sass";

const TYPE = {
    RED: "red",
    GREEN: "green",
};

const Highlight = props => {
    return <span className={cx("unistar-highlight", props.type)}>{props.children}</span>;
};

Highlight.propTypes = {
    type: PropTypes.string,
};

Highlight.defaultProps = {
    type: TYPE.RED,
};

export default Highlight;
