import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";
import OrderedDemo from "./OrderedDemo";
import ExclamationDemo from "./ExclamationDemo";

const document = () => (
    <>
        <p>列表元件有兩種類型（default, ordered, exclamation），佈局：行高為1，項目間距為12。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" demo={DefaultDemo} />
        <Block title="Ordered" demo={OrderedDemo} />
        <Block title="Exclamation" demo={ExclamationDemo} />
    </>
);

export default { title: "Data Display|List" };
export const View = () => <Wrapper title="List" document={document} examples={examples} />;
