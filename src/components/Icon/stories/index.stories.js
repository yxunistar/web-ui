import React from "react";
import { ThemeProvider } from "Theme";
import { Wrapper } from "layout";
import Document from "./Document";
import Examples from "./Examples";

export default { title: "General/Icon" };

export const View = () => (
    <ThemeProvider>
        <Wrapper title="Icon" document={Document} examples={Examples} />
    </ThemeProvider>
);
