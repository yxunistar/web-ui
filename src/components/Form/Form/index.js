import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";

class Form extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className, layout } = this.props;
        return (
            <ThemeConsumer>
                {({ getThemeClass }) => {
                    return (
                        <div className={cx(getThemeClass("form"), getThemeClass(`form-${layout}`), className)}>{children}</div>
                    );
                }}
            </ThemeConsumer>
        );
    }
}

Form.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    layout: PropTypes.string,
};

Form.defaultProps = {
    className: "",
    layout: "horizontal",
};

export default Form;
