import React from "react";
import ThemeConsumer from "Theme/ThemeConsumer";
import cx from "classnames";
import "./style.sass";

const Exclamation = () => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <svg className={cx(getThemeClass("icon-exclamation"))} width="12px" height="12px" viewBox="0 0 512 512">
                    <g transform="translate(1 1)">
                        <g>
                            <g>
                                <path
                                    d="M436.016,73.984c-99.979-99.979-262.075-99.979-362.033,0.002c-99.978,99.978-99.978,262.073,0.004,362.031
                    c99.954,99.978,262.05,99.978,362.029-0.002C535.995,336.059,535.995,173.964,436.016,73.984z M405.848,405.844
                    c-83.318,83.318-218.396,83.318-301.691,0.004c-83.318-83.299-83.318-218.377-0.002-301.693
                    c83.297-83.317,218.375-83.317,301.691,0S489.162,322.549,405.848,405.844z"
                                />
                                <path
                                    d="M254.996,84.338c-11.782,0-21.333,9.551-21.333,21.333v213.333c0,11.782,9.551,21.333,21.333,21.333
                    c11.782,0,21.333-9.551,21.333-21.333V105.671C276.329,93.889,266.778,84.338,254.996,84.338z"
                                />
                                <path
                                    d="M254.996,383.004c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333c11.776,0,21.333-9.557,21.333-21.333
                    S266.772,383.004,254.996,383.004z"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            )}
        </ThemeConsumer>
    );
};

export default Exclamation;
