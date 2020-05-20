import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";
import ActiveDemo from "./ActiveDemo";
import AnimationDemo from "./AnimationDemo";

const document = () => (
    <>
        <p>骰子。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" description={`骰子normal狀態。`} demo={DefaultDemo} />
        <Block title="Active" description={`骰子active狀態。`} demo={ActiveDemo} />
        <Block title="Animation" description={`骰子轉動狀態。`} demo={AnimationDemo} />
    </>
);

export default { title: "General/Dice" };
export const View = () => <Wrapper title="Dice" document={document} examples={examples} />;
