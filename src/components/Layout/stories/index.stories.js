import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";
import ContainsDividerAndFormDemo from "./ContainsDividerAndFormDemo";

const document = () => (
    <>
        <p>區塊之間的間距為14px。</p>
        <p>白色與綠色背景是示意區塊範圍，實際使用不會存在。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" demo={DefaultDemo} />
        <Block title="Contains Divider and Form" demo={ContainsDividerAndFormDemo} />
    </>
);

export default { title: "Layout|Layout" };
export const View = () => <Wrapper title="Layout" document={document} examples={examples} />;
