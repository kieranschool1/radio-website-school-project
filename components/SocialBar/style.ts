import styled, { css } from "styled-components";

export const StyledSocialBar = styled.div`
    width: 100%;
    height: 28px;
    padding: 0px 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const SocialIcon = styled.a`
    width: 16px;
    height: 16px;
    opacity: 0.5;
    background-size: cover;
    background-repeat: no-repeat;

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