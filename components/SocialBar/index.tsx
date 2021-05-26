import React from "react"
import { SocialIcon, StyledSocialBar } from "./style"

import * as call from "../../assets/call.svg"
import * as email from "../../assets/email.svg"
import * as facebook from "../../assets/facebook.svg"
import * as instagram from "../../assets/instagram.svg"
import * as twitter from "../../assets/twitter.svg"

export const SocialBar = () => {
    return (
        <StyledSocialBar>
            <SocialIcon icon={call} />
        </StyledSocialBar>
    )
}