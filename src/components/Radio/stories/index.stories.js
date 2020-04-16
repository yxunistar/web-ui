import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";

const document = () => (
    <>
        <p>單選元件。</p>
    </>
);

const examples = () => <Block title="Default" demo={DefaultDemo} />;

export default { title: "Data Entry|Radio" };
export const View = () => <Wrapper title="Radio" document={document} examples={examples} />;
