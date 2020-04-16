import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style.sass";

const COLOR = {
    RED: "red",
    GREEN: "green",
};

const Highlight = props => {
    return <span className={cx("unistar-highlight", props.color)}>{props.children}</span>;
};

Highlight.propTypes = {
    color: PropTypes.string,
};

Highlight.defaultProps = {
    color: COLOR.RED,
};

export default Highlight;
