import React from "react";
import { Wrapper, Block } from "layout";
import TypeDemo from "./TypeDemo";
import ActiveDemo from "./ActiveDemo";
import DisabledDemo from "./DisabledDemo";

const document = () => (
    <>
        <p>按鈕元件有三種類型（primary, secondary, important），另外一種客製化類型會將所有樣式移除，但保留按鈕行為。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Type" demo={TypeDemo} />
        <Block title="Active" demo={ActiveDemo} />
        <Block title="Disabled" demo={DisabledDemo} />
    </>
);

export default { title: "General|Button" };
export const View = () => <Wrapper title="Button" document={document} examples={examples} />;
