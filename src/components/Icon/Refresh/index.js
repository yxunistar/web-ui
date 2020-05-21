import React from "react";
import ThemeConsumer from "Theme/ThemeConsumer";
import cx from "classnames";
import "./style.sass";

const Refresh = () => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <svg className={cx(getThemeClass("icon-refresh"))} width="16px" height="16px" viewBox="0 0 512 512">
                    <path
                        d="M224,448c-105.9,0-192-86.1-192-192S118.1,64,224,64c95,0,173.8,69.3,189.1,160H348l84,95l80-95h-66.6
	C429.8,115.6,336.6,32,224,32C100.5,32,0,132.5,0,256s100.5,224,224,224V448z"
                    />
                </svg>
            )}
        </ThemeConsumer>
    );
};

export default Refresh;
