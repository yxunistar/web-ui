import React from "react";
import Divider from "Divider";
import { ThemeProvider } from "Theme";

export default { title: "Other/Divider" };

export const withText = () => (
    <ThemeProvider>
        <Divider />
    </ThemeProvider>
);
