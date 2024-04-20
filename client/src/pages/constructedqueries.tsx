import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import {TextField,Box} from '@mui/material';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';


const WhiteBackgroundContainer = styled(Paper)(({ theme }) => ({
  paperContainer: {
    padding: '16px', // Adjust padding as needed
    backgroundColor: 'white',
    zIndex: 1000
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

type queryObject = {
    index:number,
    query:string,
}

const queries: queryObject[] = [
     {index: 0, query: "Retrieve the names and roles of all employees:"},
     {index: 1, query: "Find the total fee and billing status of Alice Johnson:"},
     {index: 2, query: "Identify the medicines disposed of by LMN Disposals:"},
     {index: 3, query: "Find the disposal details, including company, for aspirin:"},
     {index: 4, query: "Find the prescription details for MedicineA, including prescription date and doctor ID:"},
     {index: 5, query: "List the employees who have disposed of medicines along with the details of the disposed medicines:"},
     {index: 6, query: "Orders containing medicines with a batch number not disposed:"},
     {index: 7, query: "Retrieve all orders along with the drugs ordered, ordered quantity, and total price:"},
     {index: 8, query: "Find the total amount paid by each customer along with their names:"},
    {index: 9, query: "Find the prescription drugs with the highest refill limit:"},
    {index: 10, query: "Retrieve the names of drugs along with the total quantity ordered and their current stock quantity:"},
    {index: 11, query: "Show the names of customers along with the total amount billed and the amount paid:"},
    {index: 12, query: "Find the total quantity of each drug ordered across all orders:"},
    {index: 13, query: "Calculate the total price of all medicines:"},
    {index: 14, query: "Calculate the average salary of employees who have prepared orders:"},
    {index: 15, query: "Retrieve the names of customers who have prescriptions:"},
    {index: 16, query: "Identify medicines disposed of by employees with a salary above the average:"},
    {index: 17, query: "Retrieve customers who have insurance with the highest co-insurance value:"},
    {index: 18, query: "Find the prescription drugs with the highest prescribed quantity:"},
]

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

type resulttype = {
  metaData: object[],
  rows: object[],
}

type MetaDataItem = {
  name: string;
  dbType: {
    // Define the structure of dbType if needed
    // Example: dbTypeProperty: string;
  };
  nullable: boolean;
  isJson: boolean;
  byteSize: number;
  // Add other properties as needed
}


type Rows = Array<Array<string[]>>;



export default function Queriesdisplay() {
    const [metaDataresult,setmetaDataResult] = React.useState<MetaDataItem[]>();
    const [rowsresult,setrowsResult] = React.useState<Rows>()
    const [val,setValue] = React.useState('');

    const handleChange = async(event: React.ChangeEvent<HTMLInputElement>) => {

      axios.post("http://localhost:3000/api/queries",{
            headers: {},
            data:{
                index:Number(event.target.value)
            }
        }
        ).then((response) =>{
           setmetaDataResult(response.data?.metaData);
           setrowsResult(response.data?.rows);
           console.log(metaDataresult)
           console.log(response?.data);
        });
        
          setValue(event.target.value as string);
          
       


    };
    

      

        

        
      

  return (
    <Stack direction={"row"}  zIndex={100} sx={{display:'flex',justifyContent:'left'}}>
        <Box width='250' minWidth={250} marginTop={3}>
          <WhiteBackgroundContainer sx={{zIndex:100}}>
          <FormControl variant="standard" sx={{ m: 1,width:300 }}>
          <TextField
          label='query'
          select 
          value={val}
          onChange={handleChange}
          >
              <MenuItem value='0'>Retrieve the names and roles of all employees:</MenuItem>
              <MenuItem value='1'>Find the total fee and billing status of Alice Johnson:</MenuItem>
              <MenuItem value='2'>Identify the medicines disposed of by OMG Manufacturer:</MenuItem>
              <MenuItem value='3'>Find the disposal details, including company, for Paracetamol:</MenuItem>
              <MenuItem value='4'>Find the prescription details for MedicineA, including prescription date and doctor ID:</MenuItem>
              <MenuItem value='5'>List the employees who have disposed of medicines along with the details of the disposed medicines:</MenuItem>
              <MenuItem value='6'>Orders containing medicines with a batch number not disposed:</MenuItem>
              <MenuItem value='7'>Retrieve all orders along with the drugs ordered, ordered quantity, and total price:</MenuItem>
              <MenuItem value='8'>Find the total amount paid by each customer along with their names:</MenuItem>
              <MenuItem value='9'>Find the prescription drugs with the highest refill limit:</MenuItem>
              <MenuItem value='10'>Retrieve the names of drugs along with the total quantity ordered and their current stock quantity:</MenuItem>
              <MenuItem value='11'>Show the names of customers along with the total amount billed and the amount paid:</MenuItem>
              <MenuItem value='12'>Find the total quantity of each drug ordered across all orders:</MenuItem>
              <MenuItem value='13'>Calculate the total price of all medicines:</MenuItem>
              <MenuItem value='14'>Calculate the average salary of employees who have prepared orders:</MenuItem>
              <MenuItem value='15'>Retrieve the names of customers who have prescriptions:</MenuItem>
              {/* <MenuItem value='16'>Identify medicines disposed of by employees with a salary above the average:</MenuItem> */}
              <MenuItem value='17'>Retrieve customers who have insurance with the highest co-insurance value:</MenuItem>
              <MenuItem value='18'>Find the prescription drugs with the highest prescribed quantity:</MenuItem>
            </TextField>
            </FormControl>
            </WhiteBackgroundContainer>
        </Box>
        

      <Box zIndex={100} marginTop={13} paddingLeft={5}>
    <TableContainer  component={Paper} sx={{zIndex:100,maxWidth:1000}}>
      <Table sx={{ minWidth: 700,zIndex:3 }} aria-label="customized table">
        <TableHead sx={{zIndex:3}}>
          <TableRow sx={{zIndex:3}}>
            {metaDataresult?.map(e=>{
              return (
            <StyledTableCell key={e.name} sx={{zIndex:100}}>{e.name}</StyledTableCell>
            )})}
          </TableRow>
        </TableHead>
        <TableBody sx={{zIndex:100}}>
          {rowsresult?.map((row,rowIndex) => (
            
            <StyledTableRow key={rowIndex} sx={{zIndex:100}}>
              {row.map((value,columnIndex)=>(
                <StyledTableCell sx={{zIndex:100 }} key={columnIndex} component="th" scope="row">
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
