import styled, { css } from "styled-components";
import Hamburger from '../../assets/img/hamburger.png';

const rotate = css`transform: rotateZ(180deg);`
export const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    border-bottom: 1px solid #F3F6F9;
    height: 80px;
    width: 100%;
    display: grid;
    padding: 0;
    grid-template-columns: max-content auto;
    align-items: center ;
    z-index: 2;
    background: #fff;

    & .right-section{
        text-align: right;
        color: #005B96;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        display: flex;
        align-items: center;
        justify-content: end;
        
        & .icon {
            margin: 0 20px;
            cursor: pointer;
        }

        
        & img {
            width: 43px;
            height: 43px;
            border-radius: 5px;
        }
        

    }
    & span{
        display: inline-flex;
        height: 40px;
        width: 40px;
        align-items: center;
        justify-content: center;
    }

    & .trigger{
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
        ${props => !props.collapse && rotate}
    }
`;

export const Header = ({collapse, user, toggle }) => (
    <HeaderWrapper  collapse={collapse}>
        <span className='trigger' onClick={toggle}>
            <img src={Hamburger} alt="hamburger" />
        </span>
        <div className='right-section'>
            <span className='icon'>
                <img src={user?.image} alt="user" />
            </span>
            {user?.name}
        </div>
    </HeaderWrapper>
)