import React from "react";
import Button from "Button";
import { ThemeProvider } from "Theme";

export default { title: "Button" };

export const withText = () => (
    <ThemeProvider>
        <Button>Hello Button</Button>
    </ThemeProvider>
);

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
