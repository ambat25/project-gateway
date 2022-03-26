import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";

export const ChartLabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: ${(props) => props.borderRadius || "10px"};
  padding: ${(props) => props.pad || "0"};
  cursor: ${(props) => props.cursor || "default"};

  & .label {
    padding: 0 0 0 12px;
  }
`;

export const ChartLabelTag = styled.span`
  width: 15px;
  height: 15px;
  background: ${(props) => props.color || "#FFF"};
  border-radius: 5px;
  display: inline-block;
`;

const COLORS = ["#6497B1", "#FFC107", "#F24E1E", "#A259FF"];

export const ChartLabel = ({ labels }) => {
  return (
    <ChartLabelWrapper>
      {labels.map((l, index) => (
        <span key={l.id}>
          <ChartLabelTag color={COLORS[index % COLORS.length]} />
          <span className="label">{l.name}</span>
        </span>
      ))}
    </ChartLabelWrapper>
  );
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius - 8 + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="10"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Chart({ data }) {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        innerRadius={50}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
