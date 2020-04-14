import React from "react";
import cx from "classnames";

const Section = props => {
    return (
        <div className={cx("unistar-section", props.className)} style={props.style}>
            {props.children}
        </div>
    );
};

export default Section;
