import styled from "styled-components";
import { Box } from "./box";
import ArrowDownIcon from '../../assets/img/arrow-down.png';

export const SelectWrapper = styled.select`
  background: #1BC5BD;
  border-radius: 5px;
  padding: 8px 50px 8px 12px;
  color: #fff;
  border: 0px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #1BC5BD url(${ArrowDownIcon}) no-repeat 90% center;
`;

export const Select = ({ options = [], onChange, value }) => {
  return (
    <Box pad="0 0 0 12px">
      <SelectWrapper onChange={(e) => onChange(e.target.value)} value={value}>
        {
          options?.map((opt, index) => (
            <option value={opt.value} label={opt.label} key={index} onClick={console.log}>
              {opt.label}
            </option>
          ))
        }
      </SelectWrapper>
    </Box>
  )
}