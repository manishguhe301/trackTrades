import React, { useState } from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import TextField from '@mui/material/TextField';
import filter from '../assets/filter.png';
import Badge from '@mui/material/Badge';
import CloseIcon from '@mui/icons-material/Close';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  Category,
  StatusWrapper,
  DetailsBarWrapper,
  TextFieldWrapper,
  Amount,
  Apply,
  Basket,
  Filter,
  FilterContainer,
  FilterWrapper,
  Header,
  Image,
  Percentage,
  RatesWrapper,
  Reset,
  StyledBox,
  StyledLabel,
  StyledPaper,
  StyledWrapper,
  Wrapper,
} from './styles/Styles';
import ModalTable from './ModalTable';

const DetailsBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleFilterClick = () => {
    if (!isBoxOpen) {
      setIsFilterOpen(!isFilterOpen);
    }
  };

  const handleBasketClick = () => {
    if (!isFilterOpen) {
      setIsBoxOpen(!isBoxOpen);
    }
  };
  return (
    <>
      <DetailsBarWrapper>
        <TextFieldWrapper
          id='outlined-basic'
          label='Scrip'
          variant='outlined'
          value='NIFTY'
        />
        <TextFieldWrapper
          id='outlined-basic'
          label='Exp'
          variant='outlined'
          value='18 May 2023'
        />
        <StatusWrapper>
          <RatesWrapper>
            <Category>Spot</Category>
            <div>
              <Amount>18,245.3</Amount>
              <Percentage>0.35%</Percentage>
            </div>
          </RatesWrapper>
          <RatesWrapper>
            <Category>Fut</Category>
            <div>
              <Amount>18,251.1</Amount>
              <Percentage>0.35%</Percentage>
            </div>
          </RatesWrapper>
          <Wrapper>
            <RatesWrapper>
              <Category>Max pain</Category>
              <div>
                <Amount>18,200</Amount>
              </div>
            </RatesWrapper>
            <RatesWrapper>
              <Category>PCR</Category>
              <div>
                <Amount>0.92</Amount>
              </div>
            </RatesWrapper>
            <RatesWrapper>
              <Category style={{ display: 'flex', alignItems: 'center' }}>
                Support 1 <UnfoldMoreIcon sx={{ fontSize: 'inherit' }} />
              </Category>
              <div>
                <Amount>18100</Amount>
              </div>
            </RatesWrapper>
            <RatesWrapper>
              <Category style={{ display: 'flex', alignItems: 'center' }}>
                Resistance 1 <UnfoldMoreIcon sx={{ fontSize: 'inherit' }} />
              </Category>
              <div>
                <Amount>18500</Amount>
              </div>
            </RatesWrapper>
          </Wrapper>
        </StatusWrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FilterContainer>
            <FilterWrapper onClick={handleFilterClick}>
              <Image src={filter} alt='filter' />
              <Filter>Filters</Filter>
            </FilterWrapper>
            {isFilterOpen && (
              <StyledPaper>
                <Header>
                  Filters
                  <CloseIcon
                    sx={{ fontSize: '16px', cursor: 'pointer' }}
                    onClick={handleFilterClick}
                  />
                </Header>
                <StyledWrapper>
                  <StyledLabel>LTP range</StyledLabel>
                  <StyledBox>
                    <TextField value='Minimum LTP' disabled />
                    <HorizontalRuleIcon
                      sx={{ fontSize: '12px', marginRight: '6px' }}
                    />
                    <TextField value='Maximum LTP' disabled />
                  </StyledBox>
                </StyledWrapper>
                <StyledWrapper>
                  <StyledBox>
                    <StyledLabel style={{ flex: 1 }}>
                      LTP change by %
                    </StyledLabel>
                    <TextField
                      value='Today open'
                      style={{ flex: 1 }}
                      disabled
                    />
                  </StyledBox>
                </StyledWrapper>
                <StyledWrapper>
                  <StyledBox>
                    <StyledLabel style={{ flex: 1 }}>
                      Specific Strike
                    </StyledLabel>
                    <TextField value='' style={{ flex: 1 }} disabled />
                  </StyledBox>
                </StyledWrapper>
                <StyledWrapper>
                  <StyledBox>
                    <StyledLabel style={{ flex: 1 }}>Display</StyledLabel>
                    <FormGroup sx={{ display: 'block' }}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='Calls'
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label='Puts'
                      />
                    </FormGroup>
                  </StyledBox>
                </StyledWrapper>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Reset onClick={handleFilterClick}>Reset</Reset>
                  <Apply onClick={handleFilterClick}>Apply</Apply>
                </div>
              </StyledPaper>
            )}
          </FilterContainer>
          <Badge badgeContent={3}>
            <Basket onClick={handleBasketClick}>Basket</Basket>
          </Badge>
          {isBoxOpen && <ModalTable handleBasketClick={handleBasketClick} />}
        </div>
      </DetailsBarWrapper>
      <div style={{float:'right', marginRight:'80px', marginBottom:'20px'}}>
        <button
          style={{
            padding: '8px 24px',
            border: 'none',
            backgroundColor: '#4d2df9',
            color: 'white',
            borderRadius: '8px',
          }}
        >
          LTP
        </button>
        <button
          style={{
            padding: '8px 24px',
            border: 'none',
            backgroundColor: 'lightgray',
            color: 'black',
            borderRadius: '8px',
            marginLeft: '12px',
          }}
        >
          Greeks
        </button>
      </div>
    </>
  );
};

export default DetailsBar;
