import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: column;
    background-color: var(--chorus-accent-color);
`;

export const HeaderMain = styled.main`
    width: 100%;
    background-color: var(--chorus-accent-color);
    min-height: 140px;
    max-height: 140px;
    display: flex;
    max-width: 40rem;
    margin: 0 auto;
`;

export const HeaderLinksController = styled.ul`
    background: rgba(0,0,0,0.27);
    box-shadow: inset 0px 2px 4px rgb(0 0 0 / 25%);
    height: 42px;
    margin: 0;
    color: var(--chorus-white);
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
    min-height: 42px;

    & > div {
        max-width: 40rem;
        width: 100%;
        margin: 0 auto;
    }

    & > div > a {
        font-weight: 700;
        text-decoration: none;
        color: var(--chorus-white);
        font-family: 'DM Sans';
    }

    & > div > a:hover {
        opacity: 0.7;
    }

    & > div > a:active {
        opacity: 0.5;
    }
`;