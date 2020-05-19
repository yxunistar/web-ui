import React from "react";
import DatePicker from "DatePicker";

const RangePickerDemo = () => {
    const today = new Date();
    const state = {
        start: {
            minDate: "",
            maxDate: today,
            date: today,
        },
        end: {
            minDate: "",
            maxDate: today,
            date: today,
        },
    };
    return (
        <DatePicker.RangePicker
            start={state.start}
            end={state.end}
            onStartDateChange={startDate => this.handleStartDateChange(startDate)}
            onEndDateChange={endDate => this.handleEndDateChange(endDate)}
        />
    );
};

export default RangePickerDemo;
