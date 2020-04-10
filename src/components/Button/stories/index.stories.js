import React from "react";
import { ThemeProvider } from "Theme";
import { Wrapper } from "layout";
import Document from "./Document";
import Examples from "./Examples";

export default { title: "General/Button" };

export const View = () => (
    <ThemeProvider>
        <Wrapper title="Button" document={Document} examples={Examples} />
    </ThemeProvider>
);
