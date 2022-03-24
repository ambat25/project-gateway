import React from 'react'
import { Box } from './styled/box'
import { Card, ProjectCardWrapper } from './styled/card'
import { Table, TD, TH } from './styled/table'

export const ProjectCard = ({
  title,
  amount,
  isOpened,
  onToggle
}) => (
  <Box pad="0 0 5px" >
    <Card pad="17px 19px" cursor="pointer" onClick={onToggle}>
      <ProjectCardWrapper>
        <span>{title}</span>
        <span>{amount}</span>
      </ProjectCardWrapper>
    </Card>
    {
      isOpened && (
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
            <tr>
              <TD>
                Date
              </TD>
              <TD>
                Date
              </TD>
              <TD textAlign='center'>
                Date
              </TD>
              <TD textAlign='right'>
                Date
              </TD>
            </tr>
            <tr>
              <TD>
                Date
              </TD>
              <TD>
                Date
              </TD>
              <TD textAlign='center'>
                Date
              </TD>
              <TD textAlign='right'>
                Date
              </TD>
            </tr>
            <tr>
              <TD>
                Date
              </TD>
              <TD>
                Date
              </TD>
              <TD textAlign='center'>
                Date
              </TD>
              <TD textAlign='right'>
                Date
              </TD>
            </tr>
          </tbody>
        </Table>
      )
    }
  </Box>
)