//story witin story

import React from "react";
import { ButtonDanger } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
    title: "Testing/Subscription"
}

export const PrimarySubscription = () => (
    <>
        <Large />
        <ButtonDanger />
    </>
)