import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { withRouter } from "react-router-dom";
import { context } from "../../context";
import { Badge, Tag } from "@components";
import "./style";

const TYPE = {
    BADGE: "BADGE",
    TAG: "TAG",
};

let Item = props => {
    const {
        location: { pathname },
    } = props;
    const handleClick = () => {
        props.onClick && props.onClick();

        // to 不知道哪裡需要用，先保留
        // if (customRoute) {
        //     props.onClick && props.onClick();
        // } else {
        //     if (typeof props.to === "string") {
        //         props.history.push(props.to);
        //     }
        // }
    };
    const active = pathname === props.to || props.active;
    return (
        <context.Consumer>
            {({ customRoute }) => {
                return (
                    <a className={cx("item", { active }, props.className)} onClick={() => handleClick(customRoute)}>
                        {props.children}
                        {props.type === TYPE.BADGE && props.valueOfType > 0 && (
                            <Badge count={props.valueOfType} style={{ marginLeft: "8px" }} />
                        )}
                        {props.type === TYPE.TAG && <Tag text={props.valueOfType} style={{ marginLeft: "8px" }} />}
                    </a>
                );
            }}
        </context.Consumer>
    );
};

Item.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
    to: PropTypes.string,
    active: PropTypes.bool,
    type: PropTypes.oneOf(Object.keys(TYPE)),
    valueOfType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
};

Item.defaultProps = {
    className: "",
    active: false,
    count: 0,
};

Item = withRouter(Item);

export default Item;
