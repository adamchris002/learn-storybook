import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
// import Center from "../src/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";


//global decorators
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m="4">{story()}</Box>
  </ThemeProvider>
));

addDecorator(withKnobs);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    options: {
      storySort: (a, b) =>
        a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
  },
};

// // theming with v6?
// export default decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <CSSReset />
//       <Box m="4">
//         <Story />
//       </Box>
//     </ThemeProvider>
//   ),
// ];
