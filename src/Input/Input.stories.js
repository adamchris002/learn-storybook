import React from "react";
import Input from "./Input";

export default {
    title: "Testing/Input",
    component: Input
}

export const Small = () => <Input size="small" placeholder="small"/>
export const Medium = () => <Input size="medium" placeholder="medium"/>
export const Large = () => <Input size="large" placeholder="large"/>