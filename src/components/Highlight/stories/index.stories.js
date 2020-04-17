import React from "react";
import { Wrapper, Block } from "layout";
import ColorDemo from "./ColorDemo";

const document = () => (
    <>
        <p>日夜版顏色一致。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Color" description={`顏色：red, green，預設 red`} demo={ColorDemo} />
    </>
);

export default { title: "Other|Highlight" };
export const View = () => <Wrapper title="Highlight" document={document} examples={examples} />;
