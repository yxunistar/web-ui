import React from "react";
import cx from "classnames";
import "./style.sass";

const Row = props => {
    return <div className={cx("unistar-form-row", props.className)}>{props.children}</div>;
};

export default Row;
