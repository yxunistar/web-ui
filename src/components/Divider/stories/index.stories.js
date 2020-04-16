import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";

const document = () => (
    <>
        <p>分隔線，預設寬度100%。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" demo={DefaultDemo} />
    </>
);

export default { title: "Other|Divider" };
export const View = () => <Wrapper title="Divider" document={document} examples={examples} />;
