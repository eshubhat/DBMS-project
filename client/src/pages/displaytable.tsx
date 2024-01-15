import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    zIndex:100,
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
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Tabledisplay() {
  return (
    <Stack direction={"column"}  zIndex={100} sx={{display:'flex',justifyContent:'right'}}>
        <div>
        <FormControl variant="filled" sx={{ m: 1,width:300 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>

    <TableContainer  component={Paper} sx={{zIndex:100,maxWidth:1300,paddingLeft:3}}>
      <Table sx={{ minWidth: 700,zIndex:3 }} aria-label="customized table">
        <TableHead sx={{zIndex:3}}>
          <TableRow sx={{zIndex:3}}>
            <StyledTableCell sx={{zIndex:100}}> Dessert (100g serving)</StyledTableCell>
            <StyledTableCell sx={{zIndex:100}} align="right">Calories</StyledTableCell>
            <StyledTableCell sx={{zIndex:100}} align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell sx={{zIndex:100}} align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell sx={{zIndex:100}} align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{zIndex:100}}>
          {rows.map((row) => (
            <StyledTableRow key={row.name} sx={{zIndex:100}}>
              <StyledTableCell sx={{zIndex:100 }} component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.calories}</StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.fat}</StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell sx={{zIndex:100}} align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
  );
}