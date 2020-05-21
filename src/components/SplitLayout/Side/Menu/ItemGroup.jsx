import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getPathname } from "./getPathname";
import Item from "./Item";

let ItemGroup = props => {
    const formatPathname = getPathname(props.location.pathname);
    let active = false;
    React.Children.forEach(props.children, children => {
        if (children.props.to === formatPathname) active = true;
    });
    return (
        <div className="item-group">
            <Item className="header" active={active} to={props.to} onClick={props.onClick}>
                {props.title}
            </Item>
            {props.children}
        </div>
    );
};

ItemGroup.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
    title: PropTypes.string,
    onClick: PropTypes.func,
};

ItemGroup.defaultProps = {
    className: "",
    title: "Group Title",
};

ItemGroup = withRouter(ItemGroup);
export default ItemGroup;
