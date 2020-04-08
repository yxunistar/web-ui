import React from "react";
import ThemeContext from "./ThemeContext";
import cx from "classnames";
import { THEME } from "./constant";

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: localStorage.getItem("ui-theme") || THEME.EARLY,
        };
    }

    switchTheme = e => {
        e.preventDefault();
        const theme = this.state.theme === THEME.EARLY ? THEME.NIGHT : THEME.EARLY;
        localStorage.setItem("ui-theme", theme);
        this.setState({
            theme,
        });
        return;
    };

    getThemeClass = (suffixClass, { theme = this.state.theme, custom = false } = { theme: this.state.theme, custom: false }) => {
        if (!custom) {
            return cx({
                [`unistar-${suffixClass}`]: true,
                [`unistar-${suffixClass}-${theme}`]: !!theme,
            });
        } else {
            return cx({
                [`custom-${suffixClass}`]: true,
                [`custom-${suffixClass}-${theme}`]: !!theme,
            });
        }
    };

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    getThemeClass: this.getThemeClass,
                }}
            >
                <div style={{ marginBottom: "20px" }}>
                    <a href="#" onClick={this.switchTheme} style={{ textDecoration: "underline" }}>
                        SwitchTheme
                    </a>
                    <br />
                    Current Theme: {this.state.theme}
                </div>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
