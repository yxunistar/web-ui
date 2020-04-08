import React from "react";
import "./style.sass";

const Block = props => {
    return (
        <div className="ui-block">
            <h2>{props.title}</h2>
            {props.description && <p>{props.description}</p>}
            {props.children}
        </div>
    );
};

export default Block;
