import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box,Stack } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    zIndex:100,
    textAlign:'center',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    zIndex:100,
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  Rollno: number,
  USN: string,
  Div: string,
  Batch: string,
) {
  return { name, Rollno, USN, Div, Batch };
}

const rows = [
  createData('Laxmi', 101, "01FE22BCS051", 'A', 'A1'),
  createData('Eshan A. Bhat',124 , "01FE22BCS129", 'A', 'A1'),
  createData('Sanjana Bhat', 101, "01FE22BCS163", 'A', 'A1'),
  createData('Anirudh R H', 101, "01FE22BCS264", 'A', 'A1'),
];

export default function CustomizedTables() {
  return (
    <Stack direction={"row"}  zIndex={100} sx={{display:'flex',justifyContent:'space-around'}}>
    <Box zIndex={100} marginTop={8}>
    <TableContainer style={{zIndex:100}} component={Paper}>
      <Table sx={{ minWidth: 1000,minHeight:400,zIndex:100 }} aria-label="customized table">
        <TableHead sx={{zIndex:100}}>
          <TableRow sx={{zIndex:100}}>
          <StyledTableCell sx={{zIndex:100}}>Name</StyledTableCell>
            <StyledTableCell align="right" sx={{zIndex:100}}>Roll No</StyledTableCell>
            <StyledTableCell align="right" sx={{zIndex:100}}>USN</StyledTableCell>
            <StyledTableCell align="right" sx={{zIndex:100}}>Div</StyledTableCell>
            <StyledTableCell align="right" sx={{zIndex:100}}>Batch</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{zIndex:100}}>
          {rows.map((row) => (
            <StyledTableRow sx={{zIndex:100}} key={row.name}>
              <StyledTableCell sx={{zIndex:100}} component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.Rollno}</StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.USN}</StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.Div}</StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.Batch}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Stack>
  );
}