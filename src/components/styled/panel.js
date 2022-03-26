import styled from "styled-components";

export const Panel = styled.div`
    padding: 0 100px 0 0;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const PanelContainer = styled.div`
    padding: 30px;
    position: relative;
    flex-grow: 1;
`;

export const PanelGrid = styled.div`
    display: grid;
    grid-template-columns: auto max-content;
`;

export const PanelHeader = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const PanelFilters = styled.div`
    display: flex;
    justify-content: space-between;

`;

