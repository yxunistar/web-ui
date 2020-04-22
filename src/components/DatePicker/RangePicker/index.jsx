import React, { useState, useEffect } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import DatePicker from "../index";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";

const today = new Date();
const RangePicker = props => {
    const [startDate, setStartDate] = useState(props.start.date);
    const [endDate, setEndDate] = useState(props.end.date);

    useEffect(() => {
        setStartDate(props.start.date);
    }, [props.start.date]);

    useEffect(() => {
        setEndDate(props.end.date);
    }, [props.end.date]);

    return (
        <ThemeConsumer>
            {({ getThemeClass }) => (
                <div className={cx(getThemeClass("range-picker", props.theme))}>
                    <DatePicker
                        selected={startDate}
                        maxDate={props.start.maxDate}
                        minDate={props.start.minDate}
                        onChange={date => {
                            if (!endDate) {
                                setEndDate(date);
                            }
                            setStartDate(date);
                            props.onStartDateChange(date);
                        }}
                    />
                    <div className="range-center-text">至</div>
                    <DatePicker
                        selected={endDate}
                        maxDate={props.end.maxDate}
                        minDate={props.end.minDate}
                        onChange={date => {
                            setEndDate(date);
                            props.onEndDateChange(date);
                        }}
                    />
                </div>
            )}
        </ThemeConsumer>
    );
};

RangePicker.propTypes = {
    start: PropTypes.shape({
        maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
    end: PropTypes.shape({
        maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }),
    onStartDateChange: PropTypes.func,
    onEndDateChange: PropTypes.func,
};

RangePicker.defaultProps = {
    start: {
        maxDate: "",
        minDate: "",
        date: today,
    },
    end: {
        maxDate: "",
        minDate: "",
        date: today,
    },
    onStartDateChange: () => {},
    onEndDateChange: () => {},
};

export default RangePicker;
