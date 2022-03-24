import styled from "styled-components";

export const Card = styled.div`
    background: ${props => props.color || '#FFF'};
    border-radius: ${props => props.borderRadius || '10px'};;
    padding: ${props => props.pad || '0'};
    cursor: ${props => props.cursor || 'default'};
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;


  color: #011F4B;
`;


export const ProjectCard = ({
  title,
  amount
}) => (
  <Card pad="17px 19px">
    <ProjectCardWrapper>
      <span>{title}</span>
      <span>{amount}</span>
    </ProjectCardWrapper>
  </Card>
)