import styled from "styled-components";

export const SideNav = styled.div`
    width: ${props => props.collapseWidth}px;
    transition: all 0.3s ease-in-out;
    overflow: hidden ;
`;

export const MenuElement = styled.div`
    width: 250px;
    overflow: hidden;
`;

export const MenuCellWrapper = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: 60px auto;
    cursor: pointer;

    &:hover{
        background: #005B96;
    }

    & .icon{
        width: 60px;height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & .label{
        display: flex;
        align-items: center;
        padding: 0 20px;
    }
`;
export const MenuCell = ({ img, title }) => (
    <MenuCellWrapper>
      <span className='icon'>
        <img src={img} alt="menu icon" />
      </span>
      <span className='label'>{title}</span>
    </MenuCellWrapper>
)

export const BrandWrapper = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: 60px auto;
    border-bottom: 1px solid #F3F6F9;

    & .icon{
        width: 60px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
    }
    & .label{
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;


export const Brand = ({ logo, name }) => (
    <BrandWrapper>
      <span className='icon'>
        <img src={logo} alt='logo' />
      </span>
      <span className='label'>{name}</span>
    </BrandWrapper>
)