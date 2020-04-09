import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { THEME } from "./constant";
import "./style.sass";

const ThemeButton = props => {
    const [theme, setTheme] = useState(localStorage.getItem("ui-theme") || THEME.EARLY);
    const switchTheme = e => {
        e.preventDefault();
        const newTheme = theme === THEME.EARLY ? THEME.NIGHT : THEME.EARLY;
        localStorage.setItem("ui-theme", newTheme);
        setTheme(newTheme);
        props.onChangeTheme(newTheme);
        return;
    };
    useEffect(() => props.onChangeTheme(theme), []);
    return (
        <div className="switch-theme">
            <a
                href="#"
                className={cx({
                    open: theme === THEME.NIGHT,
                })}
                onClick={switchTheme}
            />
        </div>
    );
};

ThemeButton.propTypes = {
    onChangeTheme: PropTypes.func,
};

export default ThemeButton;
