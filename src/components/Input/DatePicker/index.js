import React from "react";
import { Calendar } from "../../Icon";
import Input from "../../Input";

const DatePicker = props => (
    <span className="input-affix-wrapper suffix">
        <span className="input-suffix">
            <Calendar />
        </span>
        <Input {...props} />
    </span>
);

export default DatePicker;
