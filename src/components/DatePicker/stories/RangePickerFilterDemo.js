import React, { useState } from "react";
import DatePicker from "DatePicker";
import Dater from "utils/Dater";

const RangePickerFilterDemo = () => {
    const today = new Date();
    const [start, setStart] = useState(Dater.format(today, { format: "YYYY-MM-DD" }));
    const [end, setEnd] = useState(Dater.format(today, { format: "YYYY-MM-DD" }));

    const onStartDateChange = startDate => {
        setStart(startDate);
    };

    const onEndDateChange = endDate => {
        setEnd(endDate);
    };

    const onFilterChange = (startDate, endDate) => {
        setStart(startDate);
        setEnd(endDate);
    };

    return (
        <>
            <p>
                startDate: {start} , endDate: {end}
            </p>
            <DatePicker.RangePickerFilter
                onStartDateChange={onStartDateChange}
                onEndDateChange={onEndDateChange}
                onFilterChange={onFilterChange}
            />
        </>
    );
};

export default RangePickerFilterDemo;
