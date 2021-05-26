import React from "react"
import { SocialBar } from "../SocialBar"
import { GlobalStyle } from "../style"
import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <GlobalStyle />
            <SocialBar />
        </StyledHeader>
    )
}