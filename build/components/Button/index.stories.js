import React from "react";
import Button from "Button";
import { ThemeProvider } from "Theme";

export default { title: "Button" };

export var withText = function withText() {
    return React.createElement(
        ThemeProvider,
        null,
        React.createElement(
            Button,
            null,
            "Hello Button"
        )
    );
};

export var withEmoji = function withEmoji() {
    return React.createElement(
        Button,
        null,
        React.createElement(
            "span",
            { role: "img", "aria-label": "so cool" },
            "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"
        )
    );
};