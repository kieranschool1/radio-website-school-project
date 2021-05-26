import React from "react"
import { SocialBar } from "../SocialBar"
import { GlobalStyle } from "../style"
import { HeaderLinksController, HeaderMain, StyledHeader } from "./style"

import Link from "next/link"

import * as logo from "../../assets/logo.svg"
import { id } from "../../shared/id"

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
                    <Link href={"/"}>Home</Link>
                    <Link href={`/shows/${id()}/live-at-five`}>Live at Five</Link>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Home</Link>
                </div>
            </HeaderLinksController>
        </StyledHeader>
    )
}