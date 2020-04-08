import React from "react";
import cx from "classnames";
import ThemeConsumer from "../Theme/ThemeConsumer";
import "./style.sass";

const Divider = () => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => {
                return <hr className={cx(getThemeClass("divider"))} />;
            }}
        </ThemeConsumer>
    );
};

export default Divider;
