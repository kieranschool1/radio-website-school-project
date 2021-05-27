import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: column;
    background-color: var(--chorus-accent-color);
    margin-bottom: 2.5rem;
`;

export const HeaderMain = styled.main`
    background-color: var(--chorus-accent-color);
    min-height: 140px;
    max-height: 140px;
    display: flex;
    max-width: 70rem;
    padding: 0 32px;
`;

export const HeaderLinksController = styled.ul`
    background: rgba(0,0,0,0.27);
    box-shadow: inset 0px 2px 4px rgb(0 0 0 / 25%);
    margin: 0;
    color: var(--chorus-white);
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
    min-height: 42px;

    & > div {
        max-width: 70rem;
        width: 100%;
        display: flex;
        gap: 24px;
        margin: 0 auto;
        flex-flow: wrap;
        padding: 10.5px 32px;
        font-weight: 400;
    }

    & > div a {
        text-decoration: none;
        color: var(--chorus-white);
    }

    & > div a:hover {
        opacity: 0.7;
    }

    & > div a:active {
        opacity: 0.5;
    }
`;