import { Card,CardContent,CardActions,Button,Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function console(){
    const [showtable,SetshowTable] = useState(null);

    if(showtable){
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
          label="Code"
          multiline
          fullWidth
          rows={15}
          defaultValue="select *"
          variant="filled"
          sx={{width:'inherit'}}
        />
        </CardContent>

        <CardActions sx={{display: 'flex',justifyContent:'right'}}>
            <Button sx={{zIndex:3,}} variant='contained' size='large'>Done</Button>
        </CardActions>
       
       </Card>
        
         </Box>

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
        
        </CardContent>
       </Card>

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
        />
        </CardContent>

        <CardActions sx={{display: 'flex',justifyContent:'right'}}>
            <Button sx={{zIndex:3,}} variant='contained' size='large'>Done</Button>
        </CardActions>
       
       </Card>
        
         </Box>
         </Stack>
         
        </Box>
        
    );

    }
}