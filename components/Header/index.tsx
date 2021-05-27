import React from "react"
import { SocialBar } from "../SocialBar"
import { GlobalStyle } from "../style"
import { HeaderLinksController, HeaderMain, StyledHeader } from "./style"

import Link from "next/link"

import * as logo from "../../assets/logo.svg"
import { id } from "../../shared/id"

const pages = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Live at Five",
        href: `/shows/${id(1)}/live-at-five`
    }
]

const HeaderLink = ({ children, href, selected }) => {
    return (
        <span style={{ fontWeight: selected ? 700 : 0 }}>
            <Link href={href}>
                {children}
            </Link>
        </span>
    )
}

export const Header = ({ currentPage }: { currentPage?: number }) => {
    return (
        <StyledHeader>
            <GlobalStyle />
            <SocialBar />
            <HeaderMain>
                <img src={logo}></img>
            </HeaderMain>
            <HeaderLinksController>
                <div>
                    {pages.map((page, index) => (
                        <HeaderLink selected={currentPage == index} href={page.href}>{page.name}</HeaderLink>
                    ))}
                </div>
            </HeaderLinksController>
        </StyledHeader>
    )
}