import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { SuccessIcon, ErrorIcon } from "components/Icon";
import ThemeConsumer from "Theme/ThemeConsumer";
import Currency from "./Currency";
import DatePicker from "./DatePicker";
import "./style.sass";

const Input = ({
    id,
    className,
    disabled,
    placeholder,
    maxLength,
    type,
    value,
    style,
    onChange,
    onClick,
    onKeyDown,
    autocomplete,
}) => {
    const inputRef = React.createRef();
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <input
                    id={id}
                    className={cx(getThemeClass("input", className))}
                    type={type}
                    value={value}
                    style={style}
                    disabled={disabled}
                    onClick={onClick}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    autoComplete={autocomplete}
                    ref={inputRef}
                />
            )}
        </ThemeConsumer>
    );
};

// TODO: 之後建立完整的Form表單時，就會移除。
function Valid(props) {
    function validClass() {
        if (props.value.length === 0) {
            return "";
        } else {
            if (props.valid) {
                return "success";
            } else {
                return "error";
            }
        }
    }

    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <div className={cx(getThemeClass("valid-wrapper"))}>
                    <span className="input-valid-wrapper">
                        <Input className={validClass()} {...props} />
                        {props.value.length > 0 && props.valid && <SuccessIcon />}
                        {props.value.length > 0 && !props.valid && <ErrorIcon />}
                    </span>
                    {props.value.length > 0 && props.validContext && !props.valid && (
                        <div className="invalid-feedback">{props.validContext}</div>
                    )}
                </div>
            )}
        </ThemeConsumer>
    );
}

Input.Valid = Valid;
Input.Date = DatePicker;
Input.Currency = Currency;

Input.defaultProps = {
    type: "text",
};

Input.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    autocomplete: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
};

export default Input;
