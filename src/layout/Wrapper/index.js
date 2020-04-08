import React from "react";
import "./style.sass";

const Wrapper = props => {
    return <div className="unistar-ui-wrapper">{props.children}</div>;
};

export default Wrapper;
