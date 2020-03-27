import React from "react";
import ThemeContext from "./ThemeContext";
import cx from "classnames";
import { THEME } from "./constant";

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: THEME.EARLY,
        };
    }

    switchTheme = () => {
        this.setState({
            theme: this.state.theme === THEME.EARLY ? THEME.NIGHT : THEME.EARLY,
        });
    };

    getThemeClass = (suffixClass, { theme = this.state.theme, custom = false }) => {
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
                <button onClick={this.switchTheme}>switch theme</button>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
