import React from "react";
import { Wrapper, Block } from "layout";
import HorizontalLayoutDemo from "./HorizontalLayoutDemo";
import VerticalLayoutDemo from "./VerticalLayoutDemo";
import MixedLayoutDemo from "./MixedLayoutDemo";

const document = () => (
    <>
        <p>包含表單佈局、元件名稱，未來要加入驗證機制。</p>
    </>
);

const examples = () => (
    <>
        <Block
            title="Horizontal Layout"
            description={`Form.Item 水平間的間距為10px，白色與綠色背景是示意區塊範圍，實際使用不會存在。`}
            demo={HorizontalLayoutDemo}
        />
        <Block
            title="Vertical Layout"
            description={`Form.Row 垂直間的間距為14px，白色與綠色背景是示意區塊範圍，實際使用不會存在。`}
            demo={VerticalLayoutDemo}
        />
        <Block title="Mixed Layout" description={`白色與綠色背景是示意區塊範圍，實際使用不會存在。`} demo={MixedLayoutDemo} />
    </>
);

export default { title: "Data Entry/Form" };
export const View = () => <Wrapper title="Form" document={document} examples={examples} />;
