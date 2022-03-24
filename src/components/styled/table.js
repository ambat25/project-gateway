import styled from "styled-components";


export const TD = styled.td`
  border: 0px;
  font-size: 16px;
  line-height: 164.4%;
  color: #011F4B;
  text-align: ${props => props.textAlign || 'left'};
  height: 35px;
  padding: 5px 25px 5px 6px;


`;

export const TH = styled.td`
  border: none;
  font-size: 16px;
  line-height: 164.4%;
  font-weight: 400;
  color: #011F4B;
  text-align: ${props => props.textAlign || 'left'};
  height: 35px;
  padding: 5px 25px 5px 6px;
  
  background: #FFFFFF;
`;

export const Table = styled.table`
  border: 0px;
  font-size: 16px;
  line-height: 164.4%;
  width: 100%;
  color: #011F4B;
  padding: 14px 0 0 15px;

  & thead, tbody{
    width: 100%
  }
  & tr{
    width: 100%
    display: grid;
    padding: 0;
    border: 0px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  & tr:nth-child(even) {
    background: #FFFFFF;
  }
`;