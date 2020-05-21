import React from "react";
import PropTypes from "prop-types";
import ThemeConsumer from "Theme/ThemeConsumer";
import cx from "classnames";
import "./style.sass";

const Header = props => {
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => {
                return (
                    <header className={cx(getThemeClass("split-layout-header"))}>
                        <h1>{props.title}</h1>
                        {props.content && <div className="content">{React.cloneElement(props.content)}</div>}
                        <p>{props.description}</p>
                    </header>
                );
            }}
        </ThemeConsumer>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    content: PropTypes.node,
    description: PropTypes.string,
};

Header.defaultProps = {
    title: "header title",
};

export default Header;
