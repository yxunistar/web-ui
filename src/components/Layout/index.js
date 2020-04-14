import React from "react";
import Section from "./Section";
import cx from "classnames";
import "./style.sass";

const Layout = props => {
    return <div className={cx("unistar-layout", props.className)}>{props.children}</div>;
};

Layout.Section = Section;
export default Layout;
