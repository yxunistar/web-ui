import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";

const document = () => (
    <>
        <p>
            子頁面佈局，雖然有使用 React Router 切換頁面，但實際上只使用了一半（HashRouter），並未透過導航工具 Link
            切換頁面，而是自行撰寫改變連結的邏輯（在 pf2-web 是使用 Go 模組），這部分是為了配合目前內嵌 Iframe 的架構，待未來移除
            Iframe 後才能完整使用 React Router 的功能。
        </p>
        <p>頁面類型共分：deposit, group-management, mail, notice, user, withdraw，圖片與標題皆封裝在元件中。</p>
    </>
);

const examples = () => (
    <>
        <Block
            title="Default"
            description={`帶入的目錄項目，有兩種型態：Badge(主要為數字), Type(主要為文字)`}
            demo={DefaultDemo}
        />
    </>
);

export default { title: "Layout/Split Layout" };
export const View = () => <Wrapper title="Split Layout" document={document} examples={examples} />;
