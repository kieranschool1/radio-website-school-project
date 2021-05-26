import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: column;
    background-color: var(--chorus-accent-color);
`;

export const HeaderMain = styled.main`
    padding: 38px 7.5rem;
    width: calc(100% - 7.5rem * 2);
    background-color: var(--chorus-accent-color);
    min-height: 140px;
    max-height: 140px;
    display: flex;
    align-items: center;
`;

export const HeaderLinksController = styled.ul`
    background: rgba(0,0,0,0.27);
    box-shadow: inset 0px 2px 4px rgb(0 0 0 / 25%);
    height: 48px;
    margin: 0;
    color: var(--chorus-white);
    display: flex;
    align-items: center;
    padding: 0px 7.5rem;
    width: calc(100% - 7.5rem * 2);
    min-height: 48px;
`;