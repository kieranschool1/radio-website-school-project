import styled, { css } from "styled-components";

export const StyledSocialBar = styled.div`
    width: calc(100% - 16px * 2);
    height: 32px;
    padding: 0px 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--chorus-white);
`;

export const SocialIcon = styled.a`
    width: 14px;
    height: 14px;
    opacity: 0.5;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;

    ${({ icon }: { icon: any }) => css`
        background-image: url(${icon});
    `};

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.9;
    }
`;