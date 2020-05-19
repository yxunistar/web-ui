import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";
import PasswordDemo from "./PasswordDemo";
import DisabledDemo from "./DisabledDemo";
import CurrencyDemo from "./CurrencyDemo";
import DatePickerDemo from "./DatePickerDemo";

const document = () => (
    <>
        <p>通過鼠標或鍵盤輸入內容，是最基礎的文字輸入框。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" description={`預設基本型態的輸入框`} demo={DefaultDemo} />
        <Block title="Password" description={`密碼型態的輸入框`} demo={PasswordDemo} />
        <Block title="Disabled" description={`禁用型態的輸入框`} demo={DisabledDemo} />
        <Block title="Currency" description={`用於金額的輸入框，會自動標示千分位`} demo={CurrencyDemo} />
        <Block title="DatePicker" description={`專屬日曆元件的輸入框`} demo={DatePickerDemo} />
    </>
);

export default { title: "General/Input" };
export const View = () => <Wrapper title="Input" document={document} examples={examples} />;
