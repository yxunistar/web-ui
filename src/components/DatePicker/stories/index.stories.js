import React from "react";
import { Wrapper, Block } from "layout";
import RangePickerDemo from "./RangePickerDemo";
import RangePickerFilterDemo from "./RangePickerFilterDemo";

const document = () => (
    <>
        <p>日曆元件，使用react-datepicker套件實作。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Range Picker Demo" demo={RangePickerDemo} />
        <Block title="Range Picker Filter Demo" demo={RangePickerFilterDemo} />
    </>
);

export default { title: "Data Entry|DatePicker" };
export const View = () => <Wrapper title="DatePicker" document={document} examples={examples} />;
