import React from "react";
import { ThemeProvider } from "Theme";
import { Wrapper } from "layout";
import Document from "./Document";
import Examples from "./Examples";

export default { title: "Data Display|List" };

export const View = () => (
    <ThemeProvider>
        <Wrapper title="List" document={Document} examples={Examples} />
    </ThemeProvider>
);
