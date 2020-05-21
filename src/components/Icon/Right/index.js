import React from "react";
import cx from "classnames";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";

const Right = () => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <svg className={cx(getThemeClass("icon-right"))} width="10px" height="12px" viewBox="0 0 213.3 213.3">
                    <g>
                        <g>
                            <polygon points="53.3,213.3 160,106.7 53.3,0" />
                        </g>
                    </g>
                </svg>
            )}
        </ThemeConsumer>
    );
};

export default Right;
