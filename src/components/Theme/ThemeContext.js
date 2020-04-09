import React from "react";
import cx from "classnames";
import { THEME } from "./ThemeButton/constant";

const ThemeContext = React.createContext({
    getThemeClass: (suffixClass, theme = THEME.EARLY) => {
        return cx({
            [`unistar-${suffixClass}`]: true,
            [`unistar-${suffixClass}-${theme}`]: !!theme,
        });
    },
});

export default ThemeContext;
