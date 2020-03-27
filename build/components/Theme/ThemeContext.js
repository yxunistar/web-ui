function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import cx from "classnames";
import { THEME } from "./constant";

var ThemeContext = React.createContext({
    getThemeClass: function getThemeClass(suffixClass) {
        var _cx;

        var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : THEME.EARLY;

        return cx((_cx = {}, _defineProperty(_cx, "unistar-" + suffixClass, true), _defineProperty(_cx, "unistar-" + suffixClass + "-" + theme, !!theme), _cx));
    }
});

export default ThemeContext;