import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
    title: "Testing/Button",
    component: Button,
    decorators: [story => <Center>{story()}</Center>],
    argTypes: {
        onClick: {action: "clicked"}
    }
}

const Template = (args) => <Button {...args} />

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
    variant: "primary",
    children: "Primary Args"
}

export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
    variant: "secondary",
    children: "Secondary Args"
}

export const ButtonSuccess = Template.bind({})
ButtonSuccess.args = {
    variant: "success",
    children: "Success Args"
}

export const ButtonDanger = Template.bind({})
ButtonDanger.args = {
    variant: "danger",
    children: "Danger Args"
}