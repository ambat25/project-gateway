import styled from "styled-components";
import { Box } from "./box";
import DatePicker from "react-datepicker";
import DateIcon from '../../assets/img/date-icon.png';

import "react-datepicker/dist/react-datepicker.css";


export const DateWrapper = styled.div`
  background: #1BC5BD;
  border-radius: 5px;
  padding: 8px 50px 8px 12px;
  color: #fff;
  border: 0px;
  min-width: 112px;
  width: 100%;
  height: 32px;
  cursor: pointer;
  appearance: none;
  background: #1BC5BD url(${DateIcon}) no-repeat 90% center;
`;

export const DateInput = (props) => {
  return (
    <Box pad="0 0 0 12px">
      <DatePicker
        customInput={<DateWrapper>{props.selected?.toLocaleDateString() || props.placeholder}</DateWrapper>}
        {...props}
      />

    </Box>
  )
}