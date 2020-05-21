import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./style";

const Side = props => {
    return (
        <aside className="unistar-split-layout-side">
            <header>
                <div className={cx("img", props.type)} />
                <h1>{props.title}</h1>
            </header>
            <nav>{props.menu}</nav>
            <footer>{props.footer}</footer>
        </aside>
    );
};

Side.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    menu: PropTypes.node,
    footer: PropTypes.node,
};

Side.defaultProps = {
    name: "",
    title: "",
};

export default Side;
