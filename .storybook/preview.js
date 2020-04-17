import React from "react";
import "styles/storybook-global";
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from "Theme";

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);
addParameters({
    options: {
        showRoots: true,
    },
});