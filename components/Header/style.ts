import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: column;
`;

export const HeaderMain = styled.main`
    padding: 38px 120px;
    width: calc(100% - 120px * 2);
    background-color: var(--chorus-accent-color);
`;