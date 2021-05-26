import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: column;
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

export const HeaderLinksController = styled.lis