import React from "react";
import { Wrapper, Block } from "layout";
import HorizontalLayoutDemo from "./HorizontalLayoutDemo";
import VerticalLayoutDemo from "./VerticalLayoutDemo";
import MixedLayoutDemo from "./MixedLayoutDemo";

const document = () => (
    <>
        <p>包含表單佈局、元件名稱，未來要加入驗證機制，表單垂直之間的間距為14px，水平之間的間距為10px。</p>
        <p>白色與綠色背景是示意區塊範圍，實際使用不會存在。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Horizontal Layout" demo={HorizontalLayoutDemo} />
        <Block title="Vertical Layout" demo={VerticalLayoutDemo} />
        <Block title="Mixed Layout" demo={MixedLayoutDemo} />
    </>
);

export default { title: "Data Entry|Form" };
export const View = () => <Wrapper title="Form" document={document} examples={examples} />;
