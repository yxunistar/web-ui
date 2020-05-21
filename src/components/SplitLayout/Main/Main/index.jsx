import React from "react";
import PropTypes from "prop-types";
import "./style";
import cx from "classnames";
import { Redirect, Route, Switch } from "react-router-dom";

const Main = props => (
    <main className="unistar-split-layout-main">
        <div className={cx("content-outter", props.className)}>
            <Switch>
                {props.routes.map((route, index) => {
                    return <Route key={index} path={route.path} component={route.component} exact={true} />;
                })}
                <Redirect to={props.redirectPath || props.routes[0].path} />
            </Switch>
        </div>
    </main>
);

Main.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
            component: PropTypes.elementType,
        })
    ),
    redirectPath: PropTypes.string,
};

Main.defaultProps = {
    routes: [],
};

export default Main;
