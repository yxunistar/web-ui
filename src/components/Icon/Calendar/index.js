import React from "react";
import cx from "classnames";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";

const Calendar = () => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <svg className={cx(getThemeClass("icon-calendar"))} width="16px" height="16px" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <circle cx="125" cy="201" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="299" cy="201" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="386" cy="201" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="125" cy="288" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="125" cy="375" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="212" cy="201" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="212" cy="288" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="212" cy="375" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="299" cy="288" r="20" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="386" cy="288" r="20" />
                        </g>
                    </g>
                    <g>
                        <path d="M303,94.7h-94c-8.9,0-15.7-6.8-15.7-15.7s6.8-15.7,15.7-15.7h94c8.9,0,15.7,6.8,15.7,15.7S311.9,94.7,303,94.7z" />
                        <path
                            d="M494.2,511.1H18.8c-8.9,0-15.7-6.8-15.7-15.7V79c0-8.9,6.8-15.7,15.7-15.7h71.3c8.9,0,15.7,6.8,15.7,15.7
            s-6.8,15.7-15.7,15.7H34.5v385.1h444.1V94.7h-57.6c-8.9,0-15.7-6.8-15.7-15.7s6.8-15.7,15.7-15.7h73.3c8.9,0,15.7,6.8,15.7,15.7
            v416.5C509.9,504.3,503.1,511.1,494.2,511.1z"
                        />
                    </g>
                    <path
                        d="M149.5,128.3c-8.9,0-15.7-6.8-15.7-15.7v-87c0-8.9,6.8-15.7,15.7-15.7s15.7,6.8,15.7,15.7v87
        C165.2,121.5,158.4,128.3,149.5,128.3z"
                    />
                    <path
                        d="M361.5,128.3c-8.9,0-15.7-6.8-15.7-15.7v-87c0-8.9,6.8-15.7,15.7-15.7s15.7,6.8,15.7,15.7v87
        C377.2,121.5,370.4,128.3,361.5,128.3z"
                    />
                </svg>
            )}
        </ThemeConsumer>
    );
};

export default Calendar;
