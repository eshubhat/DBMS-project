import { Card,CardContent,CardActions,Button,Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


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

export default function console(){
    const [showtable,SetshowTable] = useState(null);
    const [done,setDone] = useState(false);
    const [input,setInput] = useState('');
    const [metaDataresult,setmetaDataResult] = React.useState<MetaDataItem[]>();
    const [rowsresult,setrowsResult] = React.useState<Rows>()
    

    function handleClick(input:string){
      axios.post("http://localhost:3000/api/console",{
            headers: {},
            data:{
                input:input
            }
        }
        ).then((response) =>{
          setmetaDataResult(response.data?.metaData);
           setrowsResult(response.data?.rows);
           
        });
    }

    if(done){
    return (

        <Box zIndex={100} sx={{display:'flex',justifyContent:'space-around',paddingTop:'5'}}>
            <Stack direction="row"
            spacing={2}
            paddingTop={5}
            zIndex={100}
            >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
        display:'flex',justifyContent:'right'
      }}
      noValidate
      autoComplete="off"
    >
        
        <Card sx={{zIndex:3}}>
            <CardContent >
        <TextField
          id="outlined-multiline-static"
          label="Code"
          multiline
          fullWidth
          rows={13}
          defaultValue="select *"
          variant="filled"
          sx={{width:'inherit'}}
          onChange={(e)=>{setInput(e.target.value)}}
        />
        </CardContent>

        <CardActions sx={{display: 'flex',justifyContent:'right'}}>
            <Button sx={{zIndex:3,}} variant='contained' size='large' 
            onClick={()=>{
              if(input != ''){
                handleClick(input);
              }
            }}>Done</Button>
        </CardActions>
       
       </Card>
        
         </Box>


         <Box zIndex={100} marginTop={13} paddingLeft={9}>
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


         
        </Box>
        
    );
    }

    else{
        return (
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Stack direction="row"
            spacing={2}
            >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
        display:'flex',justifyContent:'right'
      }}
      noValidate
      autoComplete="off"
    >
        
        <Card sx={{zIndex:3}}>
            <CardContent >
        <TextField
          id="outlined-multiline-static"
          label="Query"
          multiline
          fullWidth
          rows={15}
          variant="filled"
          sx={{width:'inherit'}}
          onChange={(e)=>{setInput(e.target.value)}}
        />
        </CardContent>

        <CardActions sx={{display: 'flex',justifyContent:'right'}}>
            <Button sx={{zIndex:3,}} variant='contained' size='large' 
            onClick={()=>{
              if(input != ''){
                handleClick(input);
                setDone(true);
              }
            }} >Done</Button>
        </CardActions>
       
       </Card>
        
         </Box>
         </Stack>
         
        </Box>
        
    );

    }
  
}