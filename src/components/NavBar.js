import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../assets/logo.png';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    justify-content: center;
    > div:last-child {
      display: none;
    }
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin: 12px 12px 12px 28px;
`;

const H5 = styled.h5`
  margin: 0;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 1px 0px #000;
  font-size: 14px;
  margin-right: 32px;
`;

const NavElements = styled.span`
  margin-left: 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #4d2df9;
  }
`;

const Items = styled.div`
  margin-left: 20px;
  overflow: hidden;
  @media (max-width: 845px) {
    display: none;
  }
`;

const RatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 24px;
`;

const Category = styled.span`
  font-size: 11px;
  color: #818181;
  font-weight: 500;
  text-transform: uppercase;
`;

const Percentage = styled.span`
  font-size: 11px;
  color: #29ab36;
  font-weight: 500;
  margin-right: 6px;
`;

const Amount = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 32px;
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <Right>
        <Image src={Logo} alt='logo' />
        <div>
          <H5>Track</H5>
          <H5>Trades</H5>
        </div>
        <Items>
          <NavElements>Dashboard</NavElements>
          <NavElements>Option chain</NavElements>
          <NavElements>Strategy builder</NavElements>
          <NavElements>Positions</NavElements>
          <NavElements>Order book</NavElements>
        </Items>
      </Right>
      <DetailsWrapper>
        <RatesWrapper>
          <Category>Nifty</Category>
          <div>
            <Percentage>0.35%</Percentage>
            <Amount>18,245.32</Amount>
          </div>
        </RatesWrapper>
        <RatesWrapper>
          <Category>Banknifty</Category>
          <div>
            <Percentage>0.7%</Percentage>
            <Amount>39,156.1</Amount>
          </div>
        </RatesWrapper>{' '}
        <RatesWrapper>
          <Category>India vix</Category>
          <div>
            <Percentage style={{ color: '#ed524f' }}>-10.9%</Percentage>
            <Amount>12.12</Amount>
          </div>
        </RatesWrapper>
        <Profile>
          <h5>Profile</h5>
          <KeyboardArrowDownIcon />
        </Profile>
      </DetailsWrapper>
    </NavWrapper>
  );
};

export default NavBar;
