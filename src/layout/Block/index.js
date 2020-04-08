import React from "react";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";
import cx from "classnames";

const Block = props => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <div className={cx(getThemeClass("ui-block"))}>
                    <h2>{props.title}</h2>
                    {props.description && <p>{props.description}</p>}
                    {props.children}
                </div>
            )}
        </ThemeConsumer>
    );
};

export default Block;
