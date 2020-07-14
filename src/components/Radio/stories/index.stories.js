import React from "react";
import { Wrapper, Block } from "/src/layout";
import RadioGroupDemo from "./RadioGroupDemo";
import RadioDemo from "./RadioDemo";
import SizeDemo from "./SizeDemo";
import DisabledDemo from "./DisabledDemo";
import ThemeDemo from "./ThemeDemo";

const document = () => (
    <>
        <p>單選元件。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Radio" description={`純粹顯示用。`} demo={RadioDemo} />
        <Block title="Radio Group" description={`透過 RadioGroup 指定 Radio 的 checked 狀態。`} demo={RadioGroupDemo} />
        <Block title="Size" description={`尺寸有兩種型態：large (default), small，也可直接指定在 Radio 上。`} demo={SizeDemo} />
        <Block title="Disabled" description={`也可直接指定在 Radio 上。`} demo={DisabledDemo} />
        <Block title="Theme" description={`指定日夜版：early, night，不受環境影響，也可直接指定在 Radio 上。`} demo={ThemeDemo} />
    </>
);

export default { title: "Data Entry/Radio" };
export const View = () => <Wrapper title="Radio" document={document} examples={examples} />;
