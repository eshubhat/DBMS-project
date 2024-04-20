import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack,TextField,Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

const WhiteBackgroundContainer = styled(Paper)(({ theme }) => ({
  paperContainer: {
    padding: '16px', // Adjust padding as needed
    backgroundColor: 'white',
    zIndex: 1000,
    
  },
}));

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

type MetaDataItem = {
  name: string;
  nullable: boolean;
  isJson: boolean;
  byteSize: number;

}

type Rows = Array<Array<string[]>>;

export default function Tabledisplay() {
  const [metaDataresult,setmetaDataResult] = React.useState<MetaDataItem[]>();
  const [rowsresult,setrowsResult] = React.useState<Rows>()
  const [val,setValue] = React.useState('');

  React.useEffect(()=>{
    console.log(metaDataresult);
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    axios.post("http://localhost:3000/api/displayTable", {
  headers: {},
  data: {
    index: event.target.value
  }
}).then((response) => {
  setmetaDataResult(response.data?.metaData);
  setrowsResult(response.data?.rows);
  console.log(metaDataresult)
  console.log(response?.data);
});
        
    setValue(event.target.value as string)
    

};

  return (
    <Stack direction={"row"}  zIndex={100} sx={{display:'flex',justifyContent:'left'}}>
<Box width='250' minWidth={250} marginTop={3}>
          <WhiteBackgroundContainer sx={{zIndex:100,borderWidth:'thick'}}>
          <FormControl variant="standard" sx={{ m: 1,width:300 }}>
          <TextField
          label='Table'
          select 
          value={val}
          onChange={handleChange}
          >
              <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Customer</MenuItem>
          <MenuItem value={20}>Customer_order</MenuItem>
          <MenuItem value={30}>Customer_Insurance</MenuItem>
          <MenuItem value={40}> Customer_Bill</MenuItem>
          <MenuItem value={50}>Prescribed_Drugs</MenuItem>
          <MenuItem value={60}>Ordered_Drugs</MenuItem>
          <MenuItem value={70}>Employee_Details</MenuItem>
          <MenuItem value={80}>Employee_Disposed_Medicine</MenuItem>
          <MenuItem value={90}>Disposed_Medicine</MenuItem>
          <MenuItem value={100}>Medicine_Details</MenuItem>
            </TextField>
            </FormControl>
            </WhiteBackgroundContainer>
        </Box>


        
      <Box zIndex={100} marginTop={13}>
    <TableContainer  component={Paper} sx={{zIndex:100,maxWidth:800,maxHeight:400,marginLeft:2}}>
      <Table sx={{ minWidth: 700,zIndex:3 }} aria-label="customized table">
        <TableHead sx={{zIndex:3}}>
        <TableRow sx={{zIndex:3}}>
            {metaDataresult?.map(e=>{
              return (
            <StyledTableCell key={e.name} align='center' sx={{zIndex:100}}>{e.name}</StyledTableCell>
            )})}
          </TableRow>
        </TableHead>
        <TableBody sx={{zIndex:100}}>
          {rowsresult?.map((row,rowIndex) => (
            
            <StyledTableRow key={rowIndex} sx={{zIndex:100}}>
              {row.map((value,columnIndex)=>(
                <StyledTableCell sx={{zIndex:100 }} align='center' key={columnIndex} component="th" scope="row">
                {value}
              </StyledTableCell>
              ))}
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Stack>
  );
}