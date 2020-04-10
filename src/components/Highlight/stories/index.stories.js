import React from "react";
import { ThemeProvider } from "Theme";
import { Wrapper } from "layout";
import Document from "./Document";
import Examples from "./Examples";

export default { title: "Other/Highlight" };

export const View = () => (
    <ThemeProvider>
        <Wrapper title="Highlight" document={Document} examples={Examples} />
    </ThemeProvider>
);
