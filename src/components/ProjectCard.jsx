import React from 'react'
import { formatDate, numberWithCommas } from '../utils'
import { Box } from './styled/box'
import { Card, ProjectCardWrapper } from './styled/card'
import { Table, TD, TH } from './styled/table'

export const ProjectCard = ({
  title,
  isOpened,
  onToggle,
  data,
  gateways
}) => (
    <Box pad="0 0 5px">
      <Card pad="17px 19px" cursor="pointer" onClick={onToggle}>
        <ProjectCardWrapper>
          <span>{title}</span>
          <span>
            Total: {numberWithCommas(Number.parseFloat(data?.reduce((acc, cur) => (Number.parseFloat(acc) + Number.parseFloat(cur.amount)), 0)).toFixed(2))}
            {' '} USD
          </span>
        </ProjectCardWrapper>
      </Card>
      {
        isOpened && (
          <Box pad="14px 0 0 15px">
          <Table>
            <thead>
              <tr>
                <TH>
                  Date
                </TH>
                <TH>
                  Gateway
                </TH>
                <TH textAlign='center'>
                  Transaction ID
                </TH>
                <TH textAlign='right'>
                  Amount
                </TH>
              </tr>
            </thead>
            <tbody>
              {
                data?.sort((a, b) => new Date(a.created) - new Date(b.created))?.map((row, index) => (
                  <tr key={index}>
                    <TD>
                      {formatDate(row.created)}
                    </TD>
                    <TD>
                      {gateways?.[row.gatewayId]?.name}
                    </TD>
                    <TD textAlign='center'>
                      {row.paymentId}
                    </TD>
                    <TD textAlign='right'>
                      {numberWithCommas(row.amount)} USD
                    </TD>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          </Box>
        )
      }
    </Box>
)