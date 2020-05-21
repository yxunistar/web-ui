import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";
import TwoLevelSelectDemo from "./TwoLevelSelectDemo";
import DisabledDemo from "./DisabledDemo";

const document = () => (
    <>
        <p>下拉選擇器。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" description={`基本下拉選單`} demo={DefaultDemo} />
        <Block title="TwoLevelSelect" description={`雙層下拉選單`} demo={TwoLevelSelectDemo} />
        <Block title="DisabledSelect" description={`禁用下拉選單`} demo={DisabledDemo} />
    </>
);

export default { title: "General/Select" };
export const View = () => <Wrapper title="Select" document={document} examples={examples} />;
