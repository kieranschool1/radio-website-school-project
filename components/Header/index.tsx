import React from "react"
import { SocialBar } from "../SocialBar"
import { GlobalStyle } from "../style"
import { HeaderMain, StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <GlobalStyle />
            <SocialBar />
            <HeaderMain>

            </HeaderMain>
        </StyledHeader>
    )
}