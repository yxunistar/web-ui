import React from "react";
import { ThemeProvider } from "Theme";
import { Wrapper } from "layout";
import Document from "./Document";
import Examples from "./Examples";

export default { title: "Other/Divider" };

export const View = () => (
    <ThemeProvider>
        <Wrapper title="Divider" document={Document} examples={Examples} />
    </ThemeProvider>
);
