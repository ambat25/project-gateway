import React from 'react'
import EmptyPlaceholder from '../assets/img/empty.png';
import styled from "styled-components";

const EmptyWrapper = styled.div`
    padding: 100px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & span {
      width: 500px;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #7E8299;
      padding: 10px 0 50px
    }
`;

export default function Empty() {
  return (
    <EmptyWrapper>
      <label>No reports</label>
      <span>
        Currently you have no data for the reports to be generated.
        Once you start generating traffic through the Balance application
        the reports will be shown.
      </span>
      <img src={EmptyPlaceholder} alt="empty placeholder" />
    </EmptyWrapper>
  )
}
