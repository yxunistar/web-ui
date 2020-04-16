import React, { useState } from "react";
import Radio from "Radio/index";

const DefaultDemo = () => {
    const [value, setValue] = useState("Peggy");
    return (
        <Radio.Group value={value} onChange={e => setValue(e.target.value)}>
            <Radio value="Peggy" key="Peggy">
                Peggy
            </Radio>
            <Radio value="Wade" key="Wade">
                Wade
            </Radio>
        </Radio.Group>
    );
};

export default DefaultDemo;
