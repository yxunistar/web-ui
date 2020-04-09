import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeButton from "./ThemeButton";
import cx from "classnames";

class ThemeProvider extends React.Component {
    state = {
        theme: null,
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
                <ThemeButton onChangeTheme={theme => this.setState({ theme })} />
                <div className="unistar-ui-root">{this.props.children}</div>
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
