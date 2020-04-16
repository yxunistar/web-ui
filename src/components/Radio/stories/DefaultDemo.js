import React from "react";
import Radio from "Radio/index";

const DefaultDemo = () => {
    return (
        <Radio.Group>
            <Radio value="Girl" key="Girl" defaultChecked>
                Girl
            </Radio>
            <Radio value="Boy" key="Boy">
                Boy
            </Radio>
        </Radio.Group>
    );
};

export default DefaultDemo;
