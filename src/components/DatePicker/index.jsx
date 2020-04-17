import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import ThemeConsumer from "Theme/ThemeConsumer";
import RangePicker from "./RangePicker";
import RangePickerFilter from "./RangePickerFilter";

import "react-datepicker/dist/react-datepicker.css";
import "./style.sass";

const DatePicker = props => (
    <ThemeConsumer>
        {({ getThemeClass }) => (
            <ReactDatePicker
                dateFormat="yyyy-MM-dd"
                selected={props.selected}
                maxDate={props.maxDate}
                minDate={props.minDate}
                onChange={props.onChange}
                customInput={<input onClick={props.onClick} />}
                calendarClassName={cx(getThemeClass("calendar", props.theme))}
            />
        )}
    </ThemeConsumer>
);

DatePicker.RangePicker = RangePicker;
DatePicker.RangePickerFilter = RangePickerFilter;

DatePicker.propTypes = {
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func,
};

DatePicker.defaultProps = {
    selected: "",
    maxDate: "",
    minDate: "",
    onChange: () => {},
};

export default DatePicker;
