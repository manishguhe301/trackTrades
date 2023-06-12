import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Paper } from '@mui/material';

export const Category = styled.span`
  font-size: 12px;
  color: #818181;
  font-weight: 500;
`;

export const DetailsBarWrapper = styled.div`
  margin: 32px 92px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const TextFieldWrapper = styled(TextField)`
  width: 140px;

  @media (max-width: 600px) {
    display: none !important;
  }
`;

export const Percentage = styled.span`
  font-size: 13px;
  color: #29ab36;
  font-weight: 500;
  margin-left: 6px;
`;

export const Amount = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const RatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  @media (max-width: 1268px) {
    margin-left: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 36px;
  @media (max-width: 1268px) {
    margin: 0px 8px;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 24px;
  @media (max-width: 1268px) {
    margin-left: 8px;
  }
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export const Filter = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
  &:hover {
    color: #4d2df9;
  }
`;

export const Basket = styled.button`
  padding: 8px 40px;
  color: #fff;
  background-color: #4d2df9;
  border: none;
  cursor: pointer;
  margin-left: 24px;
  @media (max-width: 768px) {
    padding: 6px 20px;
    font-size: 14px;
    margin-left: 28px;
  }
`;

export const FilterContainer = styled.div`
  position: relative;
`;

export const StyledPaper = styled(Paper)`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-30%);
  padding: 12px;
  margin-top: 12px;
  width: 250px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
`;

export const StyledWrapper = styled.div`
  margin-top: 12px;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Reset = styled.button`
  border: 1px solid #4d2df9;
  padding: 6px 12px;
  background-color: #fff;
  color: #4d2df9;
  margin-right: 12px;
  cursor: pointer;
`;

export const Apply = styled.button`
  background-color: #4d2df9;
  border: 1px solid #4d2df9;
  padding: 6px 12px;
  color: #fff;
  font-weight: 550;
  cursor: pointer;
`;

export const StyledBasket = styled(Paper)`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 820px;
  height: 450px;
  z-index: 100;
`;

export const BoxHeader = styled.div`
  height: 60px;
  background-color: #4d2df9;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.span`
  font-size: 12px;
`;

export const ContentData = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const ColoredType = styled.span`
  padding: 5px 10px;
  background-color: #4d2df9;
  color: #fff;
  width: 34px;
  display: flex;
  justify-content: center;
`;

export const StyledBorder = styled.span`
  display: flex;
  border: 1px solid #9d9d9d;
  width: 50px;
  height: 20px;
  padding-left: 4px;
`;

export const ColoredSL = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #4d2df9;
`;

export const CloseBasket = styled.button`
  padding: 12px 14px;
  border: 2px solid #4d2df9;
  background: #fff;
  color: #4d2df9;
  font-weight: 600;
  cursor: pointer;
`;

export const PlaceOrder = styled.button`
  padding: 12px 14px;
  background: #4d2df9;
  font-weight: 600;
  color: #fff;
  border: 2px solid #4d2df9;
  margin-left: 12px;
  cursor: pointer;
`;


