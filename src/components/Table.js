import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TableWrapper = styled.div`
  margin: 20px 80px;
`;

const columns = [
  { id: '1', label: 'OI Buildup', minWidth: 170 },
  { id: '2', label: 'IV', minWidth: 10 },
  {
    id: '3',
    label: 'OI',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: '4',
    label: 'Volume',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: '5',
    label: 'Chng%',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: '6',
    label: 'LTP',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: '7',
    label: '',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: '8',
    label: 'Strike',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: '9',
    label: '',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: '10',
    label: 'Chng%',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: '11',
    label: 'Volume',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: '12',
    label: 'OI',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: '13', label: 'IV', minWidth: 100 },
  { id: '14', label: 'OI Buildup', minWidth: 170 },
];

function createData(
  name,
  label,
  oi,
  volume,
  chng,
  ltp,
  bs,
  strike,
  b2s,
  chng2,
  volume2,
  oi2,
  label2,
  name2
) {
  return {
    name,
    label,
    oi,
    volume,
    chng,
    ltp,
    bs,
    strike,
    b2s,
    chng2,
    volume2,
    oi2,
    label2,
    name2,
  };
}

const rows = [
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
  createData(
    'Long Buildup',
    '9.4',
    '35K',
    '1.25K',
    '+123.5%',
    '1,245.3',
    'BS',
    '17700',
    'BS',
    '15.3',
    '-44.2%',
    '982',
    '1.4K',
    '9.2',
    'Long Unwinding'
  ),
];

const MainTable = () => {
  return (
    <TableWrapper>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader size='small' aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' colSpan={7}>
                  CALLS
                </TableCell>
                <TableCell align='center' colSpan={12}>
                  PUTS
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    align={column.align}
                    style={{ top: 40 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role='checkbox' key={row.id}>
                    {Object.values(row).map((value) => {
                      return <TableCell>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </TableWrapper>
  );
};

export default MainTable;
