import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
};

// const Template = (args) => <Button {...args} />;

// export const Success = () => <Button variantColor="green">Success</Button>

// export const Success = Template.bind({});
// Success.args = {
//   colorScheme: "green",
//   children: "Success",
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   colorScheme: "red",
//   children: "Danger",
// };

export const Test = () => (
  <Button onClick={action("Click Handler")} colorScheme="yellow">
    test
  </Button>
);

export const TestLagi = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    Danger
  </Button>
);

export const Log = () => (
    <Button colorScheme="purple" onClick={() => console.log("test doang ini", process.env.STORYBOOK_THEME)}>test</Button>
);

export const Knobs = () => (
    <Button colorScheme="purple" disabled={boolean('Disabled', false)}>
        {text('Label', 'Button Label')}
    </Button>
)
