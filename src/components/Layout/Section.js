import React from "react";

const Section = props => {
    return (
        <div className="unistar-section" style={props.style}>
            {props.children}
        </div>
    );
};

export default Section;
