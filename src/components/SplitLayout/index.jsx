import React from "react";
import PropTypes from "prop-types";
import { HashRouter } from "react-router-dom";
import { context } from "./context";
import Side, { Menu } from "./Side";
import Main, { Header } from "./Main";
import "./style";

export const TYPE = {
    agent: "开户管理",
    deposit: "充值",
    "group-management": "团队管理",
    mail: "邮件",
    notice: "公告",
    user: "个人",
    withdraw: "提现",
};

let SplitLayout = props => {
    return (
        <context.Provider value={{ customRoute: props.routes && !!props.routes.length }}>
            <HashRouter>
                <div className="unistar-split-layout">
                    <Side type={props.type} title={TYPE[props.type]} menu={props.menu} footer={props.footer} />
                    <Main routes={props.routes} redirectPath={props.redirectPath} />
                </div>
            </HashRouter>
        </context.Provider>
    );
};

SplitLayout.propTypes = {
    type: PropTypes.oneOf(Object.keys(TYPE)),
    menu: PropTypes.node,
    footer: PropTypes.node,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
            component: PropTypes.elementType,
        })
    ),
    redirectPath: PropTypes.string,
};

SplitLayout.defaultProps = {
    name: "",
    title: "",
    routes: [],
};

SplitLayout.Menu = Menu;
SplitLayout.Item = Menu.Item;
SplitLayout.ItemGroup = Menu.ItemGroup;
SplitLayout.Header = Header;

export default SplitLayout;
