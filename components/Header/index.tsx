import React from "react"
import { SocialBar } from "../SocialBar"
import { GlobalStyle } from "../style"
import { HeaderLinksController, HeaderMain, StyledHeader } from "./style"

import * as logo from "../../assets/logo.svg"
import { Head } from "next/document"

export const Header = () => {
    return (
        <StyledHeader>
            <GlobalStyle />
            <SocialBar />
            <HeaderMain>
                <img src={logo}></img>
            </HeaderMain>
            <HeaderLinksController>
                <div>
                    <Link>Home</a>
                </div>
            </HeaderLinksController>
        </StyledHeader>
    )
}