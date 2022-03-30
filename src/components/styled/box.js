import styled from "styled-components";

export const Box = styled.div`
    padding: ${props => props.pad || '0'};
    margin: ${props => props.margin || '0'};
    position: relative;
`;

export const TableReportBox = styled.div`
    padding: ${props => props.pad || '0'};
    margin: ${props => props.margin || '0'};
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
`;