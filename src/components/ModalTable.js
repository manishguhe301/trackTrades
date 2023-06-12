import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {
  BoxContent,
  BoxHeader,
  CloseBasket,
  ColoredSL,
  ColoredType,
  ContentData,
  ContentHeader,
  PlaceOrder,
  StyledBasket,
  StyledBorder,
} from './styles/Styles';

const ModalTable = ({ handleBasketClick }) => {
  return (
    <StyledBasket elevation={6}>
      <BoxHeader>
        <BoxContent>
          <ContentHeader>Max profit</ContentHeader>
          <ContentData>24,000/-</ContentData>
        </BoxContent>
        <BoxContent>
          <ContentHeader>Max loss</ContentHeader>
          <ContentData>Unlimited</ContentData>
        </BoxContent>{' '}
        <BoxContent>
          <ContentHeader>Risk:Reward</ContentHeader>
          <ContentData>NA</ContentData>
        </BoxContent>{' '}
        <BoxContent>
          <ContentHeader>Probability</ContentHeader>
          <ContentData>32%</ContentData>
        </BoxContent>{' '}
        <BoxContent>
          <ContentHeader>Breakeven</ContentHeader>
          <ContentData> &gt; 38124.2</ContentData>
        </BoxContent>
      </BoxHeader>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Instrument</TableCell>
            <TableCell align='left'>B/S</TableCell>
            <TableCell align='left'>Type</TableCell>
            <TableCell align='left'>Qty</TableCell>
            <TableCell align='left'>Price</TableCell>
            <TableCell align='left'>Trigger</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row'>
              NIFTY 18MAY23 18200 CE
            </TableCell>
            <TableCell align='left'>
              <span
                style={{
                  padding: '5px 6px',
                  backgroundColor: '#00bce4',
                }}
              >
                B
              </span>
            </TableCell>
            <TableCell align='left'>
              <ColoredType>MIS</ColoredType>
            </TableCell>
            <TableCell align='left'>
              <StyledBorder>50</StyledBorder>
            </TableCell>
            <TableCell align='left'>
              <StyledBorder>120.5</StyledBorder>
            </TableCell>
            <TableCell>
              <StyledBorder></StyledBorder>
            </TableCell>
            <TableCell>
              <ColoredSL>
                <AddCircleOutlineIcon />
                <span>SL</span>
              </ColoredSL>
            </TableCell>
            <TableCell>
              <ColoredSL>
                <AddCircleOutlineIcon />
                <span>Tgt</span>
              </ColoredSL>
            </TableCell>
            <TableCell>
              <DeleteIcon sx={{ fill: 'darkgray' }} />
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row'>
              NIFTY 18MAY23 18200 PE
            </TableCell>
            <TableCell align='left'>
              <span
                style={{
                  padding: '5px 6px',
                  backgroundColor: '#f99792',
                }}
              >
                S
              </span>
            </TableCell>
            <TableCell align='left'>
              <ColoredType>NRML</ColoredType>
            </TableCell>
            <TableCell align='left'>
              <StyledBorder>50</StyledBorder>
            </TableCell>
            <TableCell align='left'>
              <StyledBorder>98.1</StyledBorder>
            </TableCell>
            <TableCell>
              <StyledBorder></StyledBorder>
            </TableCell>
            <TableCell>
              <ColoredSL>
                <AddCircleOutlineIcon />
                <span>SL</span>
              </ColoredSL>
            </TableCell>
            <TableCell>
              <ColoredSL>
                <AddCircleOutlineIcon />
                <span>Tgt</span>
              </ColoredSL>
            </TableCell>
            <TableCell>
              <DeleteIcon sx={{ fill: 'darkgray' }} />
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row'>
              NIFTY 18MAY23 19200 CE
            </TableCell>
            <TableCell align='left'>
              <span
                style={{
                  padding: '5px 6px',
                  backgroundColor: '#00bce4',
                }}
              >
                B
              </span>
            </TableCell>
            <TableCell align='left'>
              <ColoredType>MIS</ColoredType>
            </TableCell>
            <TableCell align='left'>
              <StyledBorder>50</StyledBorder>
            </TableCell>
            <TableCell align='left'>
              <StyledBorder>80.3</StyledBorder>
            </TableCell>
            <TableCell>
              <StyledBorder></StyledBorder>
            </TableCell>
            <TableCell>
              <ColoredSL>
                <AddCircleOutlineIcon />
                <span>SL</span>
              </ColoredSL>
            </TableCell>
            <TableCell>
              <ColoredSL>
                <AddCircleOutlineIcon />
                <span>Tgt</span>
              </ColoredSL>
            </TableCell>
            <TableCell>
              <DeleteIcon sx={{ fill: 'darkgray' }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <hr style={{ marginTop: '80px' }} />
      <div
        style={{
          display: 'flex',
          padding: '5px 10px',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '14px',
          }}
        >
          <span>
            Margin required: <CurrencyRupeeIcon sx={{ fontSize: '14px' }} />
            2,43,630.3
          </span>
          <span>
            Available funds:
            <CurrencyRupeeIcon sx={{ fontSize: '14px' }} />
            12,00,000.00
          </span>
        </div>
        <button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            backgroundColor: '#eef73d',
            marginLeft: '20px',
            padding: '10px',
          }}
        >
          <AddCircleOutlineIcon />
          Auto hedge
        </button>
        <div>
          <CloseBasket onClick={handleBasketClick}>Close basket</CloseBasket>
          <PlaceOrder>Place order</PlaceOrder>
        </div>
      </div>
    </StyledBasket>
  );
};

export default ModalTable;
