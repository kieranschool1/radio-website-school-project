import React from "react"
import { SocialBar } from "../SocialBar"
import { GlobalStyle } from "../style"
import { HeaderLinksController, HeaderMain, StyledHeader } from "./style"

import * as logo from "../../assets/logo.svg"

export const Header = () => {
    return (
        <StyledHeader>
            <Head>
                
            </Head>
            <GlobalStyle />
            <SocialBar />
            <HeaderMain>
                <img src={logo}></img>
            </HeaderMain>
            <HeaderLinksController>
                <div>
                    Test
                </div>
            </HeaderLinksController>
        </StyledHeader>
    )
}